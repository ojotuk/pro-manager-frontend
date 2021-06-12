import { Paper } from '@material-ui/core'
import React,{useEffect} from 'react'
import {connect,useDispatch} from "react-redux"
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'
import Timeline from '../../../Timeline/Timeline'
import AddForm from './subs/AddForm'
import {
    getCompanyProfile,
    getAttendance,
    getLeaves,
  } from "./../../../../redux/actions/client";


function Index() {

    const dispatch = useDispatch();
    //
    useEffect(() => {
      dispatch(getCompanyProfile());
      dispatch(getLeaves());
      dispatch(getAttendance());
    }, [dispatch]);

    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Time Sheet" />
        </div>
        {/* <AddAction text="Add Event" link="/task-new"/> */}
        <Paper className='pt-4 pb-4'>
        <div className='row'>
        <div className='col-lg-6 mb-4 mb-lg-0'>
            <AddForm />
            </div>
            <div className='col-lg-6 pr-4'>
            <Timeline />
            </div>
         
        </div>
        </Paper>
      
        </Layout>
        </>
    )
}

function mapStateToProps(state) {
    const { auth } = state
    return { auth }
  }


export default connect(mapStateToProps)(Index);

import React, { useEffect } from 'react'
import {connect,useDispatch} from "react-redux"
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'
import Calendar from './subs/Index';
import {getAttendance,getCompanyProfile,getLeaves} from './../../../../redux/actions/client'


function Index() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCompanyProfile());
        dispatch(getAttendance())
        dispatch(getLeaves())
    },[dispatch])
    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Calendar" />
            <Calendar />
        </div>
        </Layout>
        </>
    )
}

function mapStateToProps(state) {
    const { auth } = state
    return { auth }
  }


export default connect(mapStateToProps)(Index);

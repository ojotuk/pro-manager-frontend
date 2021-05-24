import React, { useEffect } from 'react'
import {connect} from "react-redux"
// import useAxios from '../../../../utility/axios-token-manager/init'
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'
import ReactTable from './subs/ReactDataTable'
import {getTask} from './../../../../redux/actions/client'
import {useDispatch} from 'react-redux';
import AddAction from '../../../AddAction/AddAction'

function Index() {
    const dispatch = useDispatch()
    // 
    useEffect(()=>{
        dispatch(getTask())
    },[dispatch])
    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Task Manager" />
            <AddAction text="Add Task" link="/task-new"/>
            <ReactTable />
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

import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {connect} from "react-redux"
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'
import Attendance from './components/attendance/Attendance'
import Controls from './components/Controls'
import Leave from './components/leave/Leave'
import {getLeaves} from './../../../../redux/actions/client'


function Index() {
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getLeaves())
},[dispatch])
    const [tab,setTab] = useState(0);
    const handleTabDisplays=()=>{
        switch (tab) {
            case 0:
                return <Attendance />
            case 1:
                return <Leave />
            default:
                return <Attendance />
        }
    }
    const handleControl = (num)=>{
        setTab(num)
    }
    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Attendance & leave" />
        </div>
        <div>
            <Controls tab={tab} handleControl={handleControl}/>
            {handleTabDisplays()}
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

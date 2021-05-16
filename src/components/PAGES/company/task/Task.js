import React, { useEffect } from 'react'
import {connect} from "react-redux"
import useAxios from '../../../../utility/axios-token-manager/init'
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'



function Index() {
    // 
    useEffect(()=>{
        const getTask=async ()=>{
            try {
                const tasks = await useAxios.get('/app/v2/004/all-task')
                console.log(tasks.data)
            } catch (error) {
             console.log(error)   
            }
            
        }

        getTask()
    },[])
    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Task Manager" />
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

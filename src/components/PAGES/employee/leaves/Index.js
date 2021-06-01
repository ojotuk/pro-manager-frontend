import React from 'react'
import Box from '../../../BoxLayout/Box';
import Layout from '../../../layout/employee/Layout';
import LeaveForm from './components/LeaveForm';
import DataTable from "./components/ReactDataTable"
import PageTitle from "./../../../PageTitle/Title"

// 
export default function Index() {
    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Leave & Holidays"/>
        </div>
        <div>
            <Box title="Leave Request" customStyle={{maxWidth:"1024px"}}>
                <LeaveForm />
            </Box>
        </div>
        <div>
            <DataTable />
        </div>
        </Layout>
        </>
    )
}

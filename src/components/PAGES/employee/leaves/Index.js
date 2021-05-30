import React from 'react'
import Box from '../../../BoxLayout/Box';
import Layout from '../../../layout/employee/Layout';
import LeaveForm from './components/LeaveForm';
import DataTable from "./components/ReactDataTable"


// 
export default function Index() {
    return (
        <>
        <Layout>
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

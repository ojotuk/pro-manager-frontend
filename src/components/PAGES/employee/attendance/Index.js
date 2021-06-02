import React from 'react'
import Layout from '../../../layout/employee/Layout';
import Title from '../../../PageTitle/Title';
import CheckInOut from './subs/Time';
import ReactTable from './subs/ReactDataTable'


// 
export default function Index() {
    return (
        <>
        <Layout>
        <div>
            <Title title="Attendance"/>
        </div>
        <div>
            <CheckInOut />
        </div>
        <div>
            <ReactTable />
        </div>
        </Layout>
        </>
    )
}

import React from 'react'
import Pie3D from '../../../Charts/Pie3D';
import Layout from '../../../layout/employee/Layout';
import ReactDataTable from './subs/ReactDataTable';



// 
export default function Index() {
    return (
        <>
        <Layout>
        <div>
            <Pie3D />
            <br></br>
            <ReactDataTable />
        </div>
        </Layout>
        </>
    )
}

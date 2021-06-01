import React from 'react'
import Pie3D from '../../../Charts/Pie3D';
import Layout from '../../../layout/employee/Layout';
import Title from '../../../PageTitle/Title';
import ReactDataTable from './subs/ReactDataTable';



// 
export default function Index() {
    return (
        <>
        <Layout>
            <div>
                <Title title="Task Management"/>
            </div>
        <div>
            <Pie3D />
            <br></br>
            <ReactDataTable />
        </div>
        </Layout>
        </>
    )
}

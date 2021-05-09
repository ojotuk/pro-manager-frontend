import React from 'react'
import {connect} from "react-redux"
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'



function Index() {
    return (
        <>
        <Layout>
        <div>
            <PageTitle title="Attendance & leave" />
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

import React from 'react'
import {connect} from "react-redux"
import Layout from './../../../layout/company/Layout'




function Index() {
    return (
        <>
        <Layout>
        <div>
            You are logged in
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

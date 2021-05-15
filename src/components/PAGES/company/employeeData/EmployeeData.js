import React from 'react'
import {connect} from "react-redux"
import Layout from '../../../layout/company/Layout'
import PageTitle from '../../../PageTitle/Title'
import AddEmployee from './subs/AddEmployees/Index'
import AllEmployee from './subs/AllEmployees/Index'
import EmployeeProfile from './subs/EmployeeProfile/Index'
import {HashRouter, Switch, Route} from 'react-router-dom'


function Index() {
    return (
        <>
        <Layout>
        <div style={{position:"relative"}}>
        <HashRouter>
            <PageTitle title="Employee Data " />
            <Switch>
            <Route exact path='/' component={AllEmployee}></Route>
            <Route exact path='/new' component={AddEmployee}></Route>
            <Route exact path='/profile/:id' component={EmployeeProfile}></Route>
            </Switch>
        </HashRouter>

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

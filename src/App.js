
import './App.css';
import Index from "./components/Index"
import {Switch,Route, Redirect} from 'react-router-dom'
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Dashboard from "./components/PAGES/company/dashboard/Index";
import EmployeeData from "./components/PAGES/company/employeeData/EmployeeData";
import Attendance from "./components/PAGES/company/attendanceLeave/Attendance";
import Payroll from "./components/PAGES/company/payroll/Payroll";
import TimeSheet from "./components/PAGES/company/timeSheet/TimeSheet";
import Calendar from "./components/PAGES/company/calender/Calender";
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications'
import ApiLoader from './utility/ApiLoader';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />}
    />
  )
}

function App({auth,loading}) {
// console.log('app.js')
  return (
    <>
    <Switch>
     <Route exact path="/" component={Index}/>
     <Route exact path='/signup' component={SignUp} />
     <Route exact path='/sign-in' component={SignIn} />
     <PrivateRoute authed={auth.isLogged} path='/console' component={Dashboard} />
     <PrivateRoute authed={auth.isLogged} path='/employee-data' component={EmployeeData} />
     <PrivateRoute authed={auth.isLogged} path='/employee-payroll' component={Payroll} />
     <PrivateRoute authed={auth.isLogged} path='/employee-attendance-leave' component={Attendance} />
     <PrivateRoute authed={auth.isLogged} path='/employee-time-sheet' component={TimeSheet} />
     <PrivateRoute authed={auth.isLogged} path='/calendar' component={Calendar} />
     {/* <Route exact path='/console' component={Dashboard} /> */}
    </Switch>
    <NotificationContainer />
    <ApiLoader state={loading.isLoading}/>
    </>
  );
}


function mapStateToProps(state) {
  const { auth,loading } = state
  return { auth,loading }
}

export default connect(mapStateToProps)(App);

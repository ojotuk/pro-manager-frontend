
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
import Task from './components/PAGES/company/task/Task';
import EmployeeDashboard from "./components/PAGES/employee/dashboard/Index"
import EmployeeAttendance from "./components/PAGES/employee/attendance//Index"
import EmployeeLeaves from "./components/PAGES/employee/leaves/Index"
import EmployeeSalary from "./components/PAGES/employee/salary/Index"
import EmployeeCalendar from "./components/PAGES/employee/calendar/Index"
import EmployeeTask from "./components/PAGES/employee/task/Index"
import AddForm from './components/PAGES/company/task/subs/AddForm';

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
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/console' component={Dashboard} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/employee-data' component={EmployeeData} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/employee-payroll' component={Payroll} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/employee-attendance-leave' component={Attendance} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/employee-time-sheet' component={TimeSheet} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/task-management' component={Task} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/task-new' component={AddForm} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL04"} path='/calendar' component={Calendar} />
     {/* employee private route */}
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL05"} path='/005/console' component={EmployeeDashboard} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL05"} path='/005/attendance' component={EmployeeAttendance} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL05"} path='/005/leaves' component={EmployeeLeaves} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL05"} path='/005/calendar' component={EmployeeCalendar} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL05"} path='/005/salary' component={EmployeeSalary} />
     <PrivateRoute authed={auth.isLogged && auth.auth.userType==="CL05"} path='/005/task' component={EmployeeTask} />
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

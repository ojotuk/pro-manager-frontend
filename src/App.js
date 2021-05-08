
import './App.css';
import Index from "./components/Index"
import {Switch,Route, Redirect} from 'react-router-dom'
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Dashboard from "./components/PAGES/company/dashboard/Index";
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications'


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

function App({auth}) {

  return (
    <>
    <Switch>
     <Route exact path="/" component={Index}/>
     <Route exact path='/signup' component={SignUp} />
     <Route exact path='/sign-in' component={SignIn} />
     <PrivateRoute authed={auth.isLogged} path='/console' component={Dashboard} />
     {/* <Route exact path='/console' component={Dashboard} /> */}
    </Switch>
    <NotificationContainer />
    </>
  );
}


function mapStateToProps(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(App);

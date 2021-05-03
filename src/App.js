
import './App.css';
import Index from "./components/Index"
import {Switch,Route} from 'react-router-dom'
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
function App() {
  return (
    <Switch>
     <Route exact path="/" component={Index}/>
     <Route exact path='/signup' component={SignUp} />
     <Route exact path='/sign-in' component={SignIn} />
    </Switch>
  );
}

export default App;

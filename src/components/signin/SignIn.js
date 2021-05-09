import { Button } from "@material-ui/core";
import React,{useState} from "react";
import {Link, Redirect} from 'react-router-dom'
import Brand from "../Brand/Brand";
import signinimg from "./../../asset/img/Admin-bro 1.png";
import './style.css'
import {connect, useDispatch} from "react-redux"
import {signInCompany} from './../../utility/axios-token-manager/auth'
import {signInSuccess} from "./../../redux/actions/auth"
import Flash from './../../utility/Flash'
import {loadStart,loadStop} from './../../redux/actions/loading'


// 
function SignIn({auth}) {
  const dispatch = useDispatch()
  
    const [input,setInput] = useState({companyEmail:"",password:""})
    const handleChange = (e)=>{
        input[e.target.name] = e.target.value;
        setInput({...input})
    }
    const handleSignIn = async ()=>{
      dispatch(loadStart())
      const token = await signInCompany(input);
      if(token) {
      dispatch(loadStop())
      Flash('success','Welcome back','Welcome',5000)
        return dispatch(signInSuccess(token))
      }else{
      dispatch(loadStop())
        return Flash('error','Invalid login credentials','Error',5000)
      }
      // console.log(token)
    }
  return (
    <>
    {!auth.isLogged ? 
    <div className='container sign-in-section'>
            <Brand />
      <div className="sign-up">
        <div className='sign-left'>
          <div className='sign-description'>
            <h4>Welcome back</h4>
            <p>
              Sign in with Pro manager
            </p>
          </div>
          <form onChange={handleChange} className='data-form'>
            <div className='form-field'>
              <label>Company Email</label>
              <div className='input-wrapper'>
                <input placeholder="Enter your company email" type='email' name='companyEmail' value={input.companyEmail} />
              </div>
            </div>
        
            <div className='form-field'>
              <label>Enter your password</label>
              <div className='input-wrapper'>
                <input placeholder="Enter your password" type='password' name='password' value={input.password} /><i className='fa fa-eye'></i>
              </div>
            </div>
          </form>
          <div className='cta-sign'>
            <span className='forgot'>Forgot password ?</span>
              <Button onClick={()=>handleSignIn()}>Sign in</Button>
              <p>Don't have an account ? <Link to='/signup'>Sign up</Link></p>
          </div>
        </div>
        <div className='sign-img-wrapper'>
          <img src={signinimg} alt='brand'/>
        </div>
      </div>
    </div>: <Redirect to={{pathname: '/console', state: {from: "/signin"}}}/> }
    </>
  );
}


function mapStateToProps(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(SignIn);
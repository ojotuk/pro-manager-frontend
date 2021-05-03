import { Button } from "@material-ui/core";
import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Brand from "../Brand/Brand";
import signinimg from "./../../asset/img/Admin-bro 1.png";
import './style.css'

export default function SignIn() {
    const [input,setInput] = useState({})
    const handleChange = (e)=>{
        input[e.target.name] = e.target.value;
        setInput({...input})
    }
  return (
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
              <Button >Sign in</Button>
              <p>Don't have an account ? <Link to='/signup'>Sign up</Link></p>
          </div>
        </div>
        <div className='sign-img-wrapper'>
          <img src={signinimg} alt='brand'/>
        </div>
      </div>
    </div>
  );
}

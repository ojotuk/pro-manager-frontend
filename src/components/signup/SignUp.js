import { Button } from "@material-ui/core";
import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Brand from "../Brand/Brand";
import signupimg from "./../../asset/img/Accept tasks-amico 1.png";
import './style.css'
import {States} from './../StatesLga'

export default function SignUp() {
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
            <h4>Sign Up</h4>
            <p>
              Sign up with Pro manager to enjoy our services provided for your
              organisation
            </p>
          </div>
          <form onChange={handleChange} className='data-form'>
            <div className='form-field'>
              <label>Company name</label>
              <div className='input-wrapper'>
                <input placeholder="Enter your company name" type='text' name='companyName' value={input.companyName} />
              </div>
            </div>
            <div className='form-field'>
              <label>Company Email</label>
              <div className='input-wrapper'>
                <input placeholder="Enter your company email" type='email' name='companyEmail' value={input.companyEmail} />
              </div>
            </div>
            <div className='form-field'>
              <label>Company Phone Number</label>
              <div className='input-wrapper'>
                <input placeholder="Enter your company phone number" type='number' name='companyPhone' value={input.companyPhone} />
              </div>
            </div>
            <div className='form-field'>
              <label>Number of employees</label>
              <div className='input-wrapper'>
                  <select  name='employeeTotal' value={input.employeeTotal}>
                      <option value='1-50'>1-50</option>
                      <option value='51-100'>1-50</option>
                      <option value='>500'>{`>500`}</option>
                  </select>
              </div>
            </div>
            <div className='form-field'>
              <label>State/Region</label>
              <div className='input-wrapper'>
                  <select  name='state' value={input.state}>
                     {States.map((state,index)=><option key={index} value={state}>{state}</option>)}
                  </select>
              </div>
            </div>
            <div className='form-field'>
              <label>Enter your password</label>
              <div className='input-wrapper'>
                <input placeholder="Enter your compnay name" type='password' name='password' value={input.password} /><i className='fa fa-eye'></i>
              </div>
            </div>
            <div className='form-field'>
              <label>Confirm your password</label>
              <div className='input-wrapper'>
                <input placeholder="Confirm password" type='password' name='password2' value={input.password2} /><i className='fa fa-eye-slash'></i>
              </div>
            </div>
          </form>
          <div className='cta-sign'>
              <Button >Sign Up</Button>
              <p>Already have an account ? <Link to='/sign-in'>Sign in</Link></p>
          </div>
        </div>
        <div className='sign-img-wrapper'>
          <img src={signupimg} alt='brand'/>
        </div>
      </div>
    </div>
  );
}

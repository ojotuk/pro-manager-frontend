import { Button } from "@material-ui/core";
import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Brand from "../Brand/Brand";
import signupimg from "./../../asset/img/Accept tasks-amico 1.png";
import './style.css'
import {States} from '../../utility/StatesLga'
import {signUpCompany} from "./../../utility/axios-token-manager/auth";
import {useDispatch} from "react-redux";
import {signUpCompanySuccess} from "../../redux/actions/auth"
import {connect} from "react-redux"
import Flash from './../../utility/Flash'
import {loadStart,loadStop} from './../../redux/actions/loading'
import validations from './validation.js';


function SignUp() {

  const dispatch = useDispatch()
    const [input,setInput] = useState(
      { companyEmail :"",
        companyName :"",
        password :"",
        password2 :"",
        companyPhone :"",
        employeeTotal :"1-50",
        state :"Abia"}
    )
    const handleChange = (e)=>{
        input[e.target.name] = e.target.value;
        setInput({...input})
    }
    const handleSubmit = async ()=>{
      const verify = new validations(input);

      const fields = verify.isValidField();
      const validMail = verify.isValidMail();
      const matchPassword = verify.isMatch();
      const lengthPassword = verify.isLengthy();
      // console.log(fields, validMail)

      if(!fields)  return Flash('error','All fields are required, try again','Error',5000)
      if(!validMail)  return Flash('error','Invalid email','Error',5000)
      if(!matchPassword)  return Flash('error','Password must match, try again','Error',5000)
      if(!lengthPassword)  return Flash('error','Password must be atleast 8 characters','Error',5000)
      // console.log(fields, validMail)
      dispatch(loadStart())
      const data = await signUpCompany(input);
      // console.log(data)
      if(data) {
        dispatch(loadStop())
        Flash('success','Signup was successful','Welcome',5000)
        dispatch(signUpCompanySuccess(data,true));
        window.location.href='/console'
      }else{
        dispatch(loadStop())
        return Flash('error','Fail to sign up, account already exist','Error',5000)
      }
    }
  return (
    <>
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
                      <option value='51-100'>51-100</option>
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
              <Button onClick={()=>handleSubmit()}>Sign Up</Button>
              <p>Already have an account ? <Link to='/sign-in'>Sign in</Link></p>
          </div>
        </div>
        <div className='sign-img-wrapper'>
          <img src={signupimg} alt='brand'/>
        </div>
      </div>
    </div> 
    
    </>
  );
}

function mapStateToProps(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(SignUp);
import { Button, TextField, MenuItem } from '@material-ui/core'
import React,{useRef, useState} from 'react'
// import { MenuItem } from 'react-pro-sidebar'
import styles from './styles.module.css'
import {departments,employementType} from './../../../../../../settings/choices';
import useAxios from './../../../../../../../utility/axios-token-manager/init'
import {useHistory} from 'react-router-dom'
// 
export default function AddForm() {
    const history = useHistory()
const [input,setInput] = useState({firstName:"",lastName:"", jobTitle:"", email:"",employmentType:"",department:"",salary:"",hireDate:""})
let firstName=React.createRef()
const handleChange=(e)=>{
    if(e.target.name==="email"){
    input[e.target.name] = e.target.value.trim()
    }else{
        input[e.target.name]=e.target.value.trim().charAt(0).toUpperCase() + e.target.value.trim().slice(1).toLowerCase()
    }
    setInput({...input})
}
const handleSubmit =()=>{

useAxios.post('/auth/sign-up/005/add',input)
.then(res=>
    {
        if(res.data.code===200){
            console.log(res)
        history.push('/')
        }
        // console.log(res)
        // history.push('/')
    
    })
.catch(e=>console.log(e))
    
}
// 
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>Add Employee</div>
                </div>
                <div className={styles.formItem}>
                    <div className='row' >
                        <TextField variant="filled" name="firstName" value={input.firstName} 
                        ref={firstName}
                        label="FIRST NAME" className='col-lg-5 mr-auto mb-4'
                        onChange={handleChange}
                        />
                        <TextField variant="filled" onChange={handleChange} value={input.lastName} name="lastName" label="LAST NAME" className='col-lg-5 mb-4'/>
                        <TextField variant="filled" onChange={handleChange} name="jobTitle" value={input.jobTitle} label="JOB TITLE" className='col-lg-5 mr-auto mb-4'/>
                        <TextField variant="filled" onChange={handleChange} name="email" value={input.email} label="EMAIL ADDRESS" className='col-lg-5 mb-4'/>
                        <TextField 
                        variant="filled" label="HIRE DATE"
                         type='date' className='col-lg-5
                          mr-auto mb-4'
                          InputLabelProps={{
                              shrink:true
                          }}
                          name="hireDate" value={input.hireDate}
                         onChange={handleChange}
                          />
                        <TextField variant="filled" name="employmentType" value={input.employmentType} onChange={handleChange} label="EMPLOYEMENT TYPE" className='col-lg-5 mb-4' select>
                            {employementType.map((type,index)=><MenuItem className='custom' key={index} value={type}>{type}</MenuItem>)}
                        </TextField>
                        <TextField variant="filled" name="department"
                         value={input.department} label="DEPARTMENT" 
                         className='col-lg-5 mr-auto mb-4' select
                         onChange={handleChange}
                         >
                        {departments.map((type,index)=><MenuItem className='custom' key={index} value={type}>{type}</MenuItem>)}
                        </TextField>
                        <TextField variant="filled" value={input.salary} 
                        name="salary" label="SALARY" type='number' className='col-lg-5 mb-4'
                        onChange={handleChange}
                        InputProps={{
                            
                        }}
                        />
                    </div>
                    <div className={styles.cta}>
                    <Button onClick={()=>handleSubmit()}>ADD</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

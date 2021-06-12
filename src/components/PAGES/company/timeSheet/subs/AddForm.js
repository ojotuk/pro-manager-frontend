import { TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useAxios from '../../../../../utility/axios-token-manager/init'
import Button from './../../../../Button/Button'
import {updateSnapShot} from "./../../../../../redux/actions/client"
import {loadStart,loadStop} from "./../../../../../redux/actions/loading"
import {useDispatch} from 'react-redux'
import Flash from './../../../../../utility/Flash'
// 
export default function AddForm() {
    const dispatch= useDispatch();
    const [inputs,setInputs]= useState({
        time:"", date:"",location:"",title:"",note:""
    })
    const handleChange =(e)=>{
        inputs[e.target.name] = e.target.value;
        setInputs({...inputs})
    }
    const handleReset=()=>{
        setInputs({time:"", date:"",location:"",title:"",note:""})
    }
    const handleSubmit =async ()=>{
        // console.log(inputs)
        try {
            dispatch(loadStart())
            const response = await useAxios.post('/app/v2/004/timesheet/add',inputs);
            dispatch(loadStop())
            // console.log(response.data)
            if(response.data.code===200){
                dispatch(updateSnapShot(response.data.client));
                Flash('success','New event captured','',3000);
                handleReset()
            }else{
                Flash('error','Network error','',3000)
            }
        } catch (error) {
            dispatch(loadStop())
            Flash('error','Network error','',3000)
            console.log(error.message)
        }
     
    }
    return (
        <div className='pr-4 pl-4'>
            <Typography className='mb-4' variant='h6'>Capture Event</Typography>
            <div className='row'>
                <div className='col-lg-6'>
                <TextField  label='Time' name='time' required type='time' value={inputs.time} onChange={handleChange} InputLabelProps={{shrink:true}}/>
                </div>
                <div className='col-lg-6'>
                <TextField  label='Date' name='date' required type='date' value={inputs.date} onChange={handleChange} InputLabelProps={{shrink:true}}/>
                </div>
                <div className='col-lg-12 mt-2'>
                <TextField  label='Location' name='location' type='text' value={inputs.location} onChange={handleChange} fullWidth/>
                </div>
                <div className='col-lg-12 mt-2 mb-4'>
                <TextField  label='Title' type='text' name='title' required value={inputs.title} onChange={handleChange} fullWidth/>
                </div>
                <div className='col-lg-12 mt-2'>
                <TextField variant='outlined' label='Note' name='note' value={inputs.note} onChange={handleChange} multiline rows={4} placeholder='event note...' fullWidth/>
                </div>
                <div className='col-lg-12 mt-4'>
                    <Button onClick={handleSubmit} text='Capture' disabled={!inputs.time || !inputs.date || !inputs.title}/>
                </div>
            </div>
        </div>
    )
}

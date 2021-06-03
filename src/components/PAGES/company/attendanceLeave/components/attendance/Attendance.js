import React, { useEffect } from 'react'
import Present from "./today/Index";


import {getAttendance} from './../../../../../../redux/actions/client';
import {useDispatch} from 'react-redux';

export default function Attendance() {

 const dispatch = useDispatch();

 useEffect(()=>{
     dispatch(getAttendance())
 },[dispatch])
    return (
        <div>
            <Present />
        </div>
    )
}

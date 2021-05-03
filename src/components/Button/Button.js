import React from 'react'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import axios from 'axios'
export default function ButtonComponent({text,link}) {
   const handle=async ()=>{
     const res = await  axios.get('http://localhost:4000/test')
     console.log(res)
   }
    return (
        <div className={styles.btn} onClick={()=>handle()}>
            <Link to={link}>
           <Button>{text}</Button>
            </Link>
        </div>
    )
}

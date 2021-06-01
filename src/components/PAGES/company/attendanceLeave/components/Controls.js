import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'


// 
export default function Controls({tab, handleControl}) {

    const handleClass = (num)=>{
        return classnames({
            'tab-leave-active':tab===num
        })
    }
    return (
        <>
        <div className={styles.controls+ " ro"}>
            <div className='row'>
            <div className={`col-lg-6 tab-leave  ${handleClass(0)}`} onClick={()=>handleControl(0)}>Attendance</div>
            <div className={`col-lg-6 tab-leave  ${handleClass(1)}`} onClick={()=>handleControl(1)}>Leave</div>
            </div>
        </div>
        </>
    )
}

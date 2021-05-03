import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './style.css'

export default function Brand() {
    return (
        <Link to='/'>
        <div className='brand-name-2'>
            <img src={logo} alt='brand'/><span>Pro manager</span>
        </div>
        </Link>
        
    )
}

import React from 'react'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'


// 
export default function ButtonComponent({text,link, onClick,disabled}) {
    return (
        <div className={styles.btn}>
            {link? 
            <Link to={link}>
           <Button>{text}</Button>
            </Link>: 
           <Button onClick={onClick ? ()=>onClick():null}  disabled={disabled? ()=>disabled:false} >{text}</Button>
            }
        </div>
    )
}

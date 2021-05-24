import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css'

// 
export default function AddAction({link, text}) {
  return (
    <Button className={styles.addBtn}>
        <Link to={link}>
        <span>
        {text}
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='ml-2'
        >
          <circle cx="11.5" cy="11.5" r="11.5" fill="#15255D" />
          <rect x="10.5" y="4" width="2" height="15" rx="1" fill="white" />
          <rect
            x="19"
            y="10.5"
            width="2"
            height="15"
            rx="1"
            transform="rotate(90 19 10.5)"
            fill="white"
          />
        </svg>
        </span>
        </Link>
    </Button>
  );
}

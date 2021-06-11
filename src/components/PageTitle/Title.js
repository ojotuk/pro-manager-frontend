import React from "react";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import {useSelector} from 'react-redux'

// 
export default function Title({ title }) {
    const {companyName} = useSelector(state => state.company)
  return (
    <>
     <Marquee>
        {companyName}
      </Marquee>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
     
    </>
  );
}

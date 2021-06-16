import React from "react";
import styles from "./styles.module.css";


// 
export default function Title({ title }) {

  return (
    <>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
     
    </>
  );
}

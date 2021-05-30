import { Divider } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

export default function Box({ children, title, className, customStyle }) {
  return (
    <div style={customStyle ? customStyle : null}>
      <div className={className ? styles.box + ` ${className}` : styles.box}>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
        <Divider />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}

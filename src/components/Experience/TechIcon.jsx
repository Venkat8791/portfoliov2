import React from "react";
import styles from "./TechIcon.module.css";

function TechIcon({ iconName, path }) {
  return (
    <div className={styles.gridItem}>
      <img src={path} alt={iconName} />
      <span>{iconName}</span>
    </div>
  );
}

export default TechIcon;

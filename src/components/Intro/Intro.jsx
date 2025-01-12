import React from "react";
import styles from "./Intro.module.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function Intro() {
  return (
    <div className={styles.intro}>
      <div>
        <h3>Hello, there!</h3>
        <h1>I'm Venkat</h1>
        <p>1 in million of Software Engineers around the Globe 🌏</p>
      </div>
      <div>
        <a href="/">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Intro;

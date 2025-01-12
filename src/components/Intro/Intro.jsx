import React from "react";
import styles from "./Intro.module.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.overlay}>
        <div>
          <h3>Hello, there!</h3>
          <h1>I'm Venkat</h1>
          <p>1 in millions of Software Engineers around the Globe 🌏</p>
        </div>
        <div>
          <a href="/">
            <KeyboardDoubleArrowDownIcon fontSize="large" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;

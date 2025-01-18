import React from "react";
import styles from "./Intro.module.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.overlay}>
        <div>
          <h2>Hello, there!</h2>
          <h1>I'm Venkat</h1>
          <p>1 in millions of Software Engineers around the Globe 🌏</p>
        </div>
        <div>
          <a href="#aboutMe">
            <KeyboardDoubleArrowDownIcon
              fontSize="large"
              sx={{ color: "white", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;

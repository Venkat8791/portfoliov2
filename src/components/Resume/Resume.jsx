import React from "react";
import styles from "./Resume.module.css";

function Resume() {
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <section className={styles.resume} id="resume">
      <h2>Check out my resume</h2>
      <button onClick={handleViewResume}>Grab A Copy</button>
    </section>
  );
}

export default Resume;

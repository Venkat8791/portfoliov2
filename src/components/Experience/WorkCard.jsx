import React from "react";
import styles from "./WorkCard.module.css";

function WorkCard() {
  return (
    <div className={styles.workCard}>
      <div className={styles.companyImage}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
          alt="tcs"
        />
      </div>
      <div className={styles.companyContent}>
        <h3> Tata consultancy Sevices</h3>
        <div className={styles.companyDesignation}>
          <p className={styles.designation}>Systems Engineer</p>
          <p className={styles.duration}>2022 - present</p>
        </div>
        <ul className={styles.description}>
          <li>Consultant for Americas Largest Bank JP Morgan Chase Co.</li>
          <li>
            Worked in a data migration project for Global Customer Platform
          </li>
          <li>
            Built high performance apis to handle customer data such as Email,
            Phone and Address
          </li>
          <li>
            Leveraged Kafka as intermeditary platform to provide two-way sync
            between DB2 and Oracle
          </li>
        </ul>
        <p>
          Tech used:
          <span className={styles.techTag}>Java 17</span>
          <span className={styles.techTag}>Spring Boot</span>
          <span className={styles.techTag}>AWS</span>
          <span className={styles.techTag}>Kafka</span>
          <span className={styles.techTag}>Oracle</span>
        </p>
      </div>
    </div>
  );
}

export default WorkCard;

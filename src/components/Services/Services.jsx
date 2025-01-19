import React from "react";
import styles from "./Services.module.css";
import CodeIcon from "@mui/icons-material/Code";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";

function Services() {
  return (
    <section className={styles.services} id="passion">
      <div className={styles.overlay}>
        <h2>What I do</h2>
        <div className={styles.serviceSection}>
          <div className={styles.serviceElement}>
            <span>
              <CodeIcon
                sx={{
                  fontSize: {
                    xs: 40, // Font size for extra small screens
                    sm: 40, // Font size for small screens
                    md: 60, // Font size for medium screens
                    lg: 80, // Font size for large screens
                  },
                }}
                className={styles.icon}
              />
            </span>

            <h3>Development</h3>
            <p>
              Development is about transforming ideas into scalable and
              efficient solutions. I focus on building robust systems and
              user-centric applications with clean, maintainable code.
            </p>
          </div>
          <div className={styles.serviceElement}>
            <span>
              <CloudQueueIcon
                sx={{
                  fontSize: {
                    xs: 40, // Font size for extra small screens
                    sm: 40, // Font size for small screens
                    md: 60, // Font size for medium screens
                    lg: 80, // Font size for large screens
                  },
                }}
                className={styles.icon}
              />
            </span>

            <h3>Cloud</h3>
            <p>
              Cloud computing empowers innovation by enabling scalable,
              reliable, and secure solutions. I leverage cloud technologies like
              AWS to design and deploy systems that drive efficiency and
              resilience.
            </p>
          </div>
          <div className={styles.serviceElement}>
            <span>
              <PsychologyAltIcon
                sx={{
                  fontSize: {
                    xs: 40, // Font size for extra small screens
                    sm: 40, // Font size for small screens
                    md: 60, // Font size for medium screens
                    lg: 80, // Font size for large screens
                  },
                }}
                className={styles.icon}
              />
            </span>

            <h3>Problem Solving</h3>
            <p>
              Problem-solving is at the heart of effective development. I
              approach challenges with a logical mindset, crafting innovative
              solutions to deliver value and optimize performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

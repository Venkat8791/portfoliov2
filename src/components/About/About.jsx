import React from "react";
import styles from "./About.module.css";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import NightlifeIcon from "@mui/icons-material/Nightlife";

function About() {
  return (
    <section id="aboutMe" className={styles.about}>
      <div className={styles.overlay}>
        <h2>A little bit about me</h2>
        <img src="photo.jpeg" alt="profilepic" />
        <p>
          Helle, there! My name is Venkat and I'm a passionate full stack web
          developer with a passion for front end development and back end
          devlopment. I'm currently working as Systems Engineer in TCS. I hold a
          bachelors degree in Computer Science. I aspire toward a career that
          will allow me to channel my creativity through crafting beautiful
          software and engaging experiences.
        </p>
        <p>
          When I'm not on the computer, I enjoy movies, social media, and
          dancing.
        </p>
        <div className={styles.proclamationSection}>
          <h2>TL;DR? Self Proclamations</h2>
          <div className={styles.proclamation}>
            <div>
              <span>
                <FastfoodIcon
                  className={styles.icon}
                  sx={{
                    fontSize: {
                      xs: 40, // Font size for extra small screens
                      sm: 60, // Font size for small screens
                      md: 80, // Font size for medium screens
                      lg: 100, // Font size for large screens
                    },
                  }}
                />
              </span>
              <p>Eat</p>
            </div>
            <div>
              <span>
                <KeyboardIcon
                  className={styles.icon}
                  sx={{
                    fontSize: {
                      xs: 40, // Font size for extra small screens
                      sm: 60, // Font size for small screens
                      md: 80, // Font size for medium screens
                      lg: 100, // Font size for large screens
                    },
                  }}
                />
              </span>
              <p>Code</p>
            </div>
            <div>
              <span>
                <NightlifeIcon
                  className={styles.icon}
                  sx={{
                    fontSize: {
                      xs: 40, // Font size for extra small screens
                      sm: 60, // Font size for small screens
                      md: 80, // Font size for medium screens
                      lg: 100, // Font size for large screens
                    },
                  }}
                />
              </span>
              <p>Chill</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

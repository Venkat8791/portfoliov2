import React from "react";
import styles from "./Experience.module.css";
import TechIcon from "./TechIcon";
import WorkCard from "./WorkCard";
function Experience() {
  const technologies = [
    {
      name: "c++",
      path: "devicons/cplusplus.svg",
    },
    {
      name: "python",
      path: "devicons/python.svg",
    },
    {
      name: "html",
      path: "devicons/html.svg",
    },
    {
      name: "css",
      path: "devicons/css.svg",
    },
    {
      name: "java script",
      path: "devicons/js.svg",
    },
    {
      name: "jquery",
      path: "devicons/jquery.svg",
    },
    {
      name: "bootstrap",
      path: "devicons/bootstrap.svg",
    },
    {
      name: "tailwind",
      path: "devicons/tailwind.svg",
    },
    {
      name: "react",
      path: "devicons/react.svg",
    },
    {
      name: "node js",
      path: "devicons/node.svg",
    },
    {
      name: "java",
      path: "devicons/java.svg",
    },
    {
      name: "oracle pl/sql",
      path: "devicons/oracle.svg",
    },
    {
      name: "spring",
      path: "devicons/spring.svg",
    },
    {
      name: "spring boot",
      path: "devicons/springboot.svg",
    },
    {
      name: "kafka",
      path: "devicons/kafka.svg",
    },
    {
      name: "splunk",
      path: "devicons/splunk.svg",
    },
    {
      name: "dynatrace",
      path: "devicons/dynatrace.svg",
    },
    {
      name: "linux",
      path: "devicons/linux.svg",
    },
  ];
  return (
    <section className={styles.experience}>
      <div className={styles.overlay}>
        <h2>Experience</h2>
        <p>
          I've been doing web development for about 3 years now, and I'm always
          eager to learn more in this fast paced industry.
        </p>
        <div className={styles.experienceContent}>
          <h3>Some technologies I've worked with:</h3>
          <div className={styles.techGrid}>
            {technologies.map((icon) => (
              <TechIcon iconName={icon.name} path={icon.path} key={icon.name} />
            ))}
          </div>
          <h3>where I worked:</h3>
          <WorkCard />
        </div>
      </div>
    </section>
  );
}

export default Experience;

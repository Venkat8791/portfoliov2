import React from "react";
import styles from "./Contact.module.css";
import RocketIcon from "@mui/icons-material/Rocket";
function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/venkat-gadiyakari" target="_blank">
          <img src="socialIcons/facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.x.com/gadiyakarivenky" target="_blank">
          <img src="socialIcons/x.svg" alt="x" />
        </a>
        <a href="https://www.github.com/Venkat8791" target="_blank">
          <img src="socialIcons/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/venkat-gadiyakari" target="_blank">
          <img src="socialIcons/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <a href="#intro">
        <RocketIcon sx={{ fontSize: 50, color: "white" }} />
      </a>
      <p>&copy; Venkat Gadiyakari 2025</p>
      <p>Made with React, Deployed in vercel</p>
    </section>
  );
}

export default Contact;

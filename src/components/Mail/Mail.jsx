import React from "react";
import styles from "./Mail.module.css";
import TelegramIcon from "@mui/icons-material/Telegram";
function Mail() {
  return (
    <section className={styles.mail}>
      <TelegramIcon sx={{ fontSize: 100 }} />
      <h2>Get in touch with me</h2>
      <p>
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>
      <button>
        <a href="mailto:gadiyakarivenkat@gmail.com?">Say Hello</a>
      </button>
    </section>
  );
}

export default Mail;

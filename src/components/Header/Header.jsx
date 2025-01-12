import React, { useState } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="logo.jpg" className={styles.logoimg} alt="logo" />
          <span className={styles.logoname}>Venkat Gadiyakari</span>
        </div>
        <button onClick={toggleNavbar} className={styles.burger}>
          <MenuIcon />
        </button>
        <ul className={`${styles.navlist} ${isOpen ? styles.active : ""}`}>
          <li>About</li>
          <li>Passion</li>
          <li>Experience</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

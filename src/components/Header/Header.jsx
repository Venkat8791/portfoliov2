import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="header"
    >
      <div className={styles.logo}>
        <img src="logo.jpg" className={styles.logoimg} alt="logo" />
        <span className={styles.logoname}>Venkat Gadiyakari</span>
      </div>
      <button onClick={toggleNavbar} className={styles.burger}>
        <MenuIcon />
      </button>
      <ul className={`${styles.navlist} ${isOpen ? styles.active : ""}`}>
        <li>
          <a href="#aboutMe">About</a>
        </li>
        <li>
          <a href="#passion">Passion</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import finalDestinationLogo from "../assets/images/final-destination-logo.png";
import iconInstagram from "../assets/images/icons/icons8-instagram.svg";
import iconTwitter from "../assets/images/icons/icons8-twitter.svg";
import iconYoutube from "../assets/images/icons/icons8-youtube.svg";
import iconMenu from "../assets/images/icons/icons8-menu.svg";
import iconClose from "../assets/images/icons/icons8-close.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className={isMenuOpen ? styles.navModalOpen : styles.navModalClose}>
        <img
          src={iconClose}
          alt=""
          className={isMenuOpen ? styles.close : ""}
          onClick={() => setIsMenuOpen(false)}
          role="presentation"
        />
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              About us
            </Link>
          </li>
        </ul>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/">
          <img
            className={styles.logo}
            src={finalDestinationLogo}
            alt="final-destination"
          />
        </NavLink>

        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
              About us
            </NavLink>
          </li>
        </ul>

        <ul className={styles.socials}>
          <li>
            <NavLink to="">
              <img src={iconYoutube} alt="icon-youtube" />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <img src={iconTwitter} alt="icon-twitter" />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <img src={iconInstagram} alt="icon-instagram" />
            </NavLink>
          </li>
        </ul>

        <img
          className={styles.menu}
          src={iconMenu}
          alt="icon-menu"
          onClick={() => setIsMenuOpen(true)}
          role="presentation"
        />
      </nav>
    </header>
  );
}

export default Navbar;

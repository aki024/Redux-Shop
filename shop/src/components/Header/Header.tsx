import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/pc-components-logo.png.webp";
import Cart from "../Cart/Cart";
import Darkmode from "../Darkmode/Darkmode";
import styles from "../Header/Header.module.scss";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a
            href="https://google.com/"
            target="_blank"
            rel="noopener noreferrer">
            <figure>
              <img src={logo} alt="logo" />
            </figure>
          </a>
        </div>
        <div className={styles.toggleButton} onClick={() => setActive(!active)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={active ? styles.navLinksMobile : styles.navLinks}>
          <ul>
            <li>
              <NavLink
                to={"/home"}
                onClick={() => setActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.linkActive}`
                    : `${styles.link} ${styles.underline}`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                onClick={() => setActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.linkActive}`
                    : `${styles.link} ${styles.underline}`
                }>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={() => setActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.linkActive}`
                    : `${styles.link} ${styles.underline}`
                }>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.darkMode}>
          <Cart />
          <Darkmode />
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import styles from "./NavBar.module.css";

import Logo from "../assets/images/shared/logo.svg";
import Menu from "../assets/images/shared/icon-hamburger.svg";
import Close from "../assets/images/shared/icon-close.svg";
import { useMenu } from "../contexts/MenuContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { menu } = useMenu();

  return (
    <nav className={styles.section}>
      <Link to="/">
        <img src={Logo} alt="Main Icon" className={styles.logo} />
      </Link>
      <>
        <img
          src={isOpen ? Close : Menu}
          alt="Menu Icon"
          className={styles.menu}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </>

      <ul className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        {menu.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""} title`
              }
            >
              <span className={styles.listNumber}>{i <= 9 ? `0${i}` : i}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Use CSS module

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>Blood Hope</h1>
      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link to="/HomePage">HomePage</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/needy-people">Needy People</Link>
          </li>
          <li>
            <Link to="/blood-donors">Blood Donors</Link>
          </li>
          <li>
            <Link to="/blood-banks">Blood Banks</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;






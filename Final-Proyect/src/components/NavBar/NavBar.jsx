import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
        <li>
          <NavLink className={styles.links} to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.links} to="/products">
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.links} to="/login">
            Iniciar Sesión
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.links} to="/register">
            Registrarse
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-dark-900 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="text-text hover:text-primary">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-text hover:text-primary">
            Iniciar Sesión
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="text-text hover:text-primary">
            Registrarse
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

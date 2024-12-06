import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';
import { UserIcon as SolidUserIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 flex justify-between items-center">
      <NavLink to="/" className="text-text hover:text-primary">
        <h2 className="text-black flex-1 text-3xl ml-5 font-serif drop-shadow-md ">
          SleekStyles
        </h2>
      </NavLink>
      <div className="relative mr-8  ">
        <button
          onClick={toggleIsOpen}
          className="text-gray-50 focus:outline-none"
        >
          {isOpen ? (
            <SolidUserIcon className="h-8 w-8 text-black " />
          ) : (
            <UserIcon className="h-8 w-8 text-black" />
          )}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
            <NavLink
              to="/login"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Iniciar Sesión
            </NavLink>
            <NavLink
              to="/register"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Registrarse
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

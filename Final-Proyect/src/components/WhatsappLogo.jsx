import React from 'react';
import { NavLink } from 'react-router-dom';
import wspLogo from '../assets/whatsapp.png';

const WhatsappLogo = () => {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer">
      <div className="fixed right-4 bottom-8">
        <img src={wspLogo} alt="WhatsApp Logo" className="w-17 h-14" />
      </div>
    </a>
  );
};

export default WhatsappLogo;

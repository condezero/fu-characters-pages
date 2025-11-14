
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RetroMenu.css';
import logo from '../assets/fu-logo.png';

const menuItems = [
  { label: 'Personajes', path: '/characters' },
  { label: 'Mapa', path: '/map' },
  // Puedes añadir más opciones aquí
];

function RetroMenu() {
  const navigate = useNavigate();
  return (
    <div className="retro-menu-container">
      <div className="app-logo-wrapper">
        <img src={logo} alt="FU Logo" className="app-logo" />
      </div>
      <div className="retro-menu-header">LA CAIDA DE ASCALON</div>
      <ul className="retro-menu-list">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className="retro-menu-item"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RetroMenu;

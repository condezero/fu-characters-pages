import React from 'react';
import './RetroMenu.css';
import logo from '../assets/fu-logo.png';
const menuItems = [
  { label: 'Personajes', value: 'characters' },
  { label: 'Mapa', value: 'map' },  
  // Puedes añadir más opciones aquí
];

function RetroMenu({ onSelect }) {
  return (

    <div className="retro-menu-container">
      <div className="app-logo-wrapper">
        <img src={logo} alt="FU Logo" className="app-logo" />
      </div>
      <div className="retro-menu-header">LA CAIDA DE ASCALON</div>
      <ul className="retro-menu-list">
        {menuItems.map((item) => (
          <li
            key={item.value}
            className="retro-menu-item"
            onClick={() => onSelect && onSelect(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default RetroMenu;

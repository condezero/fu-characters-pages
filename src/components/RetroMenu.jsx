import React from 'react';
import './RetroMenu.css';

const menuItems = [
  { label: 'Personajes', value: 'characters' },
  // Puedes añadir más opciones aquí
];

function RetroMenu({ onSelect }) {
  return (
    <div className="retro-menu-container">
      <div className="retro-menu-header">PRESS START</div>
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

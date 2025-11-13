import React from 'react';
import './RetroHeaderMenu.css';

const menuItems = [
  { label: 'Inicio', value: 'menu' },
  { label: 'Personajes', value: 'characters' },
  // Puedes añadir más opciones aquí
];

function RetroHeaderMenu({ current, onNavigate }) {
  return (
    <nav className="retro-header-menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.value}
            className={
              'retro-header-menu-item' + (current === item.value ? ' active' : '')
            }
            onClick={() => onNavigate && onNavigate(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default RetroHeaderMenu;

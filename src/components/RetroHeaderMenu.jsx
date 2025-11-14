
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './RetroHeaderMenu.css';

const menuItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Personajes', path: '/characters' },
  { label: 'Mapa', path: '/map' },
  // Puedes añadir más opciones aquí
];

function RetroHeaderMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="retro-header-menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={
              'retro-header-menu-item' + (location.pathname === item.path ? ' active' : '')
            }
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default RetroHeaderMenu;

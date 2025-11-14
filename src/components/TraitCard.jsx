import React from 'react';
import './StatCard.css';

export default function Equipment({ equipment, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  // Fallback de ejemplo si no hay equipo
  const defaultEquipment = [
    { tipo: 'ACCESORIO', equipado: 'Amuleto de cobre', descripcion: 'Aumenta la voluntad.' },
    { tipo: 'ARMADURA', equipado: 'Armadura de cuero', descripcion: 'Protección básica.' },
    { tipo: 'MANO PRINCIPAL', equipado: 'Espada corta', descripcion: 'Arma básica de acero.' },
    { tipo: 'MANO SECUNDARIA', equipado: 'Escudo de madera', descripcion: 'Protección ligera.' }
  ];
  const rows = equipment && equipment.length === 4 ? equipment : defaultEquipment;

  return (
    <div className="stat-card equipment-card" style={{fontSize:'0.8em', '--character-card-border-color': borderColor, '--character-card-separator-color': separatorColor}}>
      <div className="stat-card-table">
        <div className="stat-card-header">
          <div className="stat-card-cell stat-card-cell-base">Equipado</div>
          <div className="stat-card-cell stat-card-cell-actual">Descripción</div>
        </div>
        {rows.map((item, i) => (
          <div className="stat-card-row" key={i}>
            <div className="stat-card-cell stat-card-cell-base">
              {item.equipado}
              <div style={{fontSize:'0.7em',color:'#888'}}>{item.tipo}</div>
            </div>
            <div className="stat-card-cell stat-card-cell-actual">{item.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

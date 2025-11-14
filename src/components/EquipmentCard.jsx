import React from 'react';
import './StatCard.css';

export default function Equipment({ equipment, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  // Convierte el objeto equipment del JSON en filas para la tabla
  const rows = equipment
    ? [
        { equipado: equipment.accessory, tipo: 'ACCESORIO', descripcion: 'Accesorio' },
        { equipado: equipment.armor, tipo: 'ARMADURA', descripcion: 'Armadura' },
        { equipado: equipment.mainhand, tipo: 'MANO PRINCIPAL', descripcion: 'Mano principal' },
        { equipado: equipment.offhand, tipo: 'MANO SECUNDARIA', descripcion: 'Mano secundaria' }
      ]
    : [
        { equipado: 'Amuleto de cobre', tipo: 'ACCESORIO', descripcion: 'Accesorio' },
        { equipado: 'Armadura de cuero', tipo: 'ARMADURA', descripcion: 'Armadura' },
        { equipado: 'Espada corta', tipo: 'MANO PRINCIPAL', descripcion: 'Mano principal' },
        { equipado: 'Escudo de madera', tipo: 'MANO SECUNDARIA', descripcion: 'Mano secundaria' }
      ];

  return (
    <div className="stat-card equipment-card" style={{
      fontSize:'0.8em',
      '--character-card-border-color': borderColor,
      '--character-card-separator-color': separatorColor,
      width: '600px',
      margin: '2em auto',
      boxSizing: 'border-box'
    }}>
      <div className="stat-card-table">
        <div className="stat-card-header">
          <div className="stat-card-cell stat-card-cell-base" style={{textAlign:'left',marginLeft:'0.5em'}}>Equipado</div>
          <div className="stat-card-cell stat-card-cell-actual" style={{textAlign:'left',marginLeft:'0.5em'}}>Descripción</div>
        </div>
        {rows.map((item, i) => (
          <div className="stat-card-row" key={i}>
            <div className="stat-card-cell stat-card-cell-base" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'left',marginLeft:'0.5em'}}>
              <span>{item.equipado}</span>
              <span style={{fontSize:'0.7em',color:'#888',marginTop:'2px'}}>{item.tipo}</span>
            </div>
            <div className="stat-card-cell stat-card-cell-actual" style={{textAlign:'left',marginLeft:'0.5em',fontSize:'0.7em'}}>{item.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

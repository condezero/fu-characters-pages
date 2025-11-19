import React from 'react';
import './StatCard.css';
import './InfoCard.css';

export default function InfoCard({ info, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  // Estructura tipo EquipmentCard: una columna, valor principal y subtexto debajo
  const rows = [
    { value: info?.identidad ?? '---', label: 'IDENTIDAD' },
    { value: info?.tema ?? '---', label: 'TEMA' },
    { value: info?.origen ?? '---', label: 'ORIGEN' }
  ];
  return (
    <div
      className="stat-card info-card"
      style={{
        fontSize: '0.7em',
        '--character-card-border-color': borderColor,
        '--character-card-separator-color': separatorColor
      }}
    >
      <div className="stat-card-table">
        <div className="stat-card-header">
          <div className="stat-card-cell stat-card-cell-base" style={{textAlign:'left',marginLeft:'0.5em', fontSize:'inherit', fontWeight:'normal'}}>TEMA</div>
        </div>
        {rows.map((row, i) => (
          <div className="info-card-row" key={i}>
            <div className="stat-card-cell stat-card-cell-base" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'left',marginLeft:'0.5em'}}>
              <span>{row.value}</span>
              <span style={{fontSize:'0.7em',color:'#888',marginTop:'2px'}}>{row.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

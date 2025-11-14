import React from 'react';
import './StatCard.css';

export default function SkillsCard({ skills, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  // Limita a 3 filas
  const rows = (skills && skills.length > 0 ? skills : ['Espada', 'Defensa', 'Liderazgo', 'Sigilo']).slice(0, 3);

  return (
    <div className="stat-card skills-card" style={{fontSize:'0.8em', '--character-card-border-color': borderColor, '--character-card-separator-color': separatorColor}}>
      <div className="stat-card-table">
        <div className="stat-card-header">
          <div className="stat-card-cell stat-card-cell-attr">Habilidad</div>
        </div>
        {rows.map((skill, i) => (
          <div className="stat-card-row" key={i}>
            <div className="stat-card-cell stat-card-cell-attr">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

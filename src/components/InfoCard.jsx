import React from 'react';
import './StatCard.css';

export default function InfoCard({ info, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  // Siempre toma los valores del objeto info
  return (
    <div className="stat-card info-card" style={{ maxWidth: '320px', minWidth: '220px', width: '100%', fontSize: '0.7em', '--character-card-border-color': borderColor, '--character-card-separator-color': separatorColor }}>
      <div className="stat-card-table">
        <div className="stat-card-row">
          <div className="stat-card-cell stat-card-cell-attr" style={{ textAlign: 'right' }}>IDENTIDAD</div>
          <div className="stat-card-cell stat-card-cell-base">{info?.identidad ?? '---'}</div>
        </div>
        <div className="stat-card-row">
          <div className="stat-card-cell stat-card-cell-attr" style={{ textAlign: 'right' }}>TEMA</div>
          <div className="stat-card-cell stat-card-cell-base">{info?.tema ?? '---'}</div>
        </div>
        <div className="stat-card-row">
          <div className="stat-card-cell stat-card-cell-attr" style={{ textAlign: 'right' }}>ORIGEN</div>
          <div className="stat-card-cell stat-card-cell-base">{info?.origen ?? '---'}</div>
        </div>
      </div>
    </div>
  );
}

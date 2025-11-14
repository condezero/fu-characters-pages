import React from 'react';
import './StatCard.css';

export default function StatCard({ stats, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  React.useEffect(() => {
    if (stats && stats.id) {
      console.log('Personaje abierto:', stats.id, stats);
    }
  }, [stats]);

  // Si stats existe, genera las filas dinámicamente
  const rows = [
    { atributo: 'DESTREZA', base: stats?.dex ?? '-', actual: stats?.dex ?? '-' },
    { atributo: 'ASTUCIA', base: stats?.ins ?? '-', actual: stats?.ins ?? '-' },
    { atributo: 'VIGOR', base: stats?.mig ?? '-', actual: stats?.mig ?? '-' },
    { atributo: 'VOLUNTAD', base: stats?.wil ?? '-', actual: stats?.wil ?? '-' }
  ];

  return (
    <div
      className="stat-card"
      style={{
        '--character-card-border-color': borderColor,
        '--character-card-separator-color': separatorColor
      }}
    >
      <div className="stat-card-table">
        <div className="stat-card-header">
          <div className="stat-card-cell stat-card-cell-attr">Atributo</div>
          <div className="stat-card-cell stat-card-cell-base">Valor</div>
          <div className="stat-card-cell stat-card-cell-actual">Actual</div>
        </div>
        {rows.map((row, i) => (
          <div className="stat-card-row" key={i}>
            <div className="stat-card-cell stat-card-cell-attr">{row.atributo}</div>
            <div className="stat-card-cell stat-card-cell-base">{row.base}</div>
            <div className="stat-card-cell stat-card-cell-actual">{row.actual}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import './CharacterCard.css';

function CharacterCard({ title, left, rightRows, borderColor = '#ffcc00', separatorColor = '#ffcc00' }) {
  const centerRows = [
    <span key="pv"><span role="img" aria-label="Puntos de Vida">❤️</span> PV</span>,
    <span key="pm"><span role="img" aria-label="Puntos mágicos">✴️</span> PM</span>,
    <span key="pi"><span role="img" aria-label="Puntos de inventario">🎒</span> PI</span>,
    <span key="def"><span role="img" aria-label="Defensa">🛡️</span> DEF</span>
  ];
  return (
    <div
      className="character-card"
      style={{
        '--character-card-border-color': borderColor,
        '--character-card-separator-color': separatorColor
      }}
    >
      <div className="character-card-title">{title}</div>
      <div className="character-card-content">
        <div className="character-card-left">{left}</div>
        <div className="character-card-center">
          {centerRows.map((row, i) => (
            <div className="character-card-center-row" key={i}>{row}</div>
          ))}
        </div>
        <div className="character-card-right">
          {rightRows.map((row, i) => (
            i === 0 ? (
              <div className={`character-card-right-row character-card-right-row-${i}`} key={i} style={{flexDirection: 'column', alignItems: 'stretch'}}>
                <div className="character-card-right-row-content" style={{display: 'flex', justifyContent: 'space-between'}}>
                  {Array.isArray(row) ? row.map((col, j) => (
                    <div className={`character-card-right-col character-card-right-col-${i}-${j}`} key={j}>{col}</div>
                  )) : row}
                </div>
                <div className="character-card-right-row-label" style={{fontSize: '0.6em', textAlign: 'center', opacity: 0.7, marginTop: '0.2em', letterSpacing: '0.5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{width: '33%', textAlign: 'center'}}>MAX</span>
                    <span style={{width: '33%', textAlign: 'center'}}>CRISIS</span>
                    <span style={{width: '33%', textAlign: 'center'}}>ACTUAL</span>
                  </div>
                </div>
              </div>
            ) : i === 1 ? (
              <div className={`character-card-right-row character-card-right-row-${i}`} key={i} style={{flexDirection: 'column', alignItems: 'stretch'}}>
                <div className="character-card-right-row-content" style={{display: 'flex', justifyContent: 'space-between'}}>
                  {Array.isArray(row) ? row.map((col, j) => (
                    <div className={`character-card-right-col character-card-right-col-${i}-${j}`} key={j}>{col}</div>
                  )) : row}
                </div>
                <div className="character-card-right-row-label" style={{fontSize: '0.6em', textAlign: 'center', opacity: 0.7, marginTop: '0.2em', letterSpacing: '0.5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{width: '50%', textAlign: 'center'}}>MAXIMO</span>
                    <span style={{width: '50%', textAlign: 'center'}}>ACTUAL</span>
                  </div>
                </div>
              </div>
            ) : i === 2 ? (
              <div className={`character-card-right-row character-card-right-row-${i}`} key={i} style={{flexDirection: 'column', alignItems: 'stretch'}}>
                <div className="character-card-right-row-content" style={{display: 'flex', justifyContent: 'space-between'}}>
                  {Array.isArray(row) ? row.map((col, j) => (
                    <div className={`character-card-right-col character-card-right-col-${i}-${j}`} key={j}>{col}</div>
                  )) : row}
                </div>
                <div className="character-card-right-row-label" style={{fontSize: '0.6em', textAlign: 'center', opacity: 0.7, marginTop: '0.2em', letterSpacing: '0.5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{width: '50%', textAlign: 'center'}}>MAXIMO</span>
                    <span style={{width: '50%', textAlign: 'center'}}>ACTUAL</span>
                  </div>
                </div>
              </div>
            ) : i === 3 ? (
              <div className={`character-card-right-row character-card-right-row-${i}`} key={i} style={{flexDirection: 'column', alignItems: 'stretch'}}>
                <div className="character-card-right-row-content" style={{display: 'flex', justifyContent: 'space-between'}}>
                  {Array.isArray(row) ? row.map((col, j) => (
                    <div className={`character-card-right-col character-card-right-col-${i}-${j}`} key={j}>{col}</div>
                  )) : row}
                </div>
                <div className="character-card-right-row-label" style={{fontSize: '0.6em', textAlign: 'center', opacity: 0.7, marginTop: '0.2em', letterSpacing: '0.5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{width: '50%', textAlign: 'center'}}>DEFENSA</span>
                    <span style={{width: '50%', textAlign: 'center'}}>ACTUAL</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`character-card-right-row character-card-right-row-${i}`} key={i}>
                {Array.isArray(row) ? row.map((col, j) => (
                  <div className={`character-card-right-col character-card-right-col-${i}-${j}`} key={j}>{col}</div>
                )) : row}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

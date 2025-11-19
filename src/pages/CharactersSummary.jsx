import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import ImageModal from '../components/ImageModal';
import CharacterDetail from './CharacterDetail';
import Grigory from '../assets/grigory.png';
import characters from '../characters-summary.json';
import './CharactersSummary.css';
import RetroHeaderMenu from '../components/RetroHeaderMenu';

function CharactersSummary() {
  const [showGrigoryModal, setShowGrigoryModal] = useState(false);
  const navigate = useNavigate();

  // Helper to resolve avatar src
  const getAvatar = (avatar) => {
    if (avatar === 'grigory.png') return Grigory;
    return avatar;
  };

    // Fondo original

  return (
    <>
      {/* RetroHeaderMenu se renderiza desde App.jsx, no aquí */}
        <main className="page-container" style={{ minHeight: '100vh' }}>
        <h1 className="page-title">
          La caida de Ascalon
        </h1>
        <h2 className="page-subtitle">
           Arco 1. El nacimiento de los heroes.
        </h2>
        <div className="cards-grid">
          {characters.map((char) => (
            <CharacterCard
              key={char.title}
              title={<span style={{cursor:'pointer',textDecoration:'underline'}} onClick={() => navigate(`/character/${char.id}`)}>{char.title}</span>}
              left={
                char.title === 'Grigory' ? (
                  <img
                    src={getAvatar(char.avatar)}
                    alt="avatar"
                    style={{  height: '180px', cursor: 'pointer' }}
                    onClick={() => setShowGrigoryModal(true)}
                    title="Click to enlarge"
                  />
                ) : (
                  <img
                    src={getAvatar(char.avatar)}
                    alt="avatar"
                    style={{ width: '80px', height: '80px' }}
                  />
                )
              }
              rightRows={char.rightRows}
              borderColor={char.borderColor}
              separatorColor={char.separatorColor}
            />
          ))}
        </div>

        {showGrigoryModal && (
          <ImageModal
            src={Grigory}
            alt="Grigory full size"
            onClose={() => setShowGrigoryModal(false)}
          />
        )}
        {/* Modal y zoom deshabilitados, ahora se abre una nueva pestaña con la info */}
      </main>
    </>
  );
}

export default CharactersSummary;

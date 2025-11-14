import React, { useState } from 'react';
import RetroMenu from './components/RetroMenu';
import CharactersSummary from './pages/CharactersSummary';
import InteractiveMap from './pages/InteractiveMap';
import RetroHeaderMenu from './components/RetroHeaderMenu';

function App() {
  const [page, setPage] = useState('menu');

  return (
    <>
      <RetroHeaderMenu current={page} onNavigate={setPage} />

      {page === 'characters' ? (
        <CharactersSummary />
      ) : page === 'map' ? (
        <InteractiveMap />
      ) : (
        <RetroMenu
          onSelect={(val) => {
            if (val === 'characters') setPage('characters');
            if (val === 'map') setPage('map');
          }}
        />
      )}
    </>
  );
}

export default App;

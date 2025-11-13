


import React, { useState } from 'react';
import RetroMenu from './components/RetroMenu';
import CharactersSummary from './CharactersSummary';
import RetroHeaderMenu from './components/RetroHeaderMenu';

function App() {
  const [page, setPage] = useState('menu');

  return (
    <>
      <RetroHeaderMenu current={page} onNavigate={setPage} />
      {page === 'characters' ? (
        <CharactersSummary />
      ) : (
        <RetroMenu onSelect={(val) => {
          if (val === 'characters') setPage('characters');
        }} />
      )}
    </>
  );
}

export default App;

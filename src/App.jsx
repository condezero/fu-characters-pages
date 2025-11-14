
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RetroMenu from './components/RetroMenu';
import CharactersSummary from './pages/CharactersSummary';
import InteractiveMap from './pages/InteractiveMap';
import RetroHeaderMenu from './components/RetroHeaderMenu';
import CharacterDetail from './pages/CharacterDetail';
import characters from './characters-summary.json';

function App() {
  return (
    <>
      <RetroHeaderMenu />
      <Routes>
        <Route path="/" element={<RetroMenu />} />
        <Route path="/characters" element={<CharactersSummary />} />
        <Route path="/map" element={<InteractiveMap />} />
        <Route path="/character/:id" element={<CharacterDetailWrapper />} />
      </Routes>
    </>
  );
}


import { useParams } from 'react-router-dom';

function CharacterDetailWrapper() {
  const { id } = useParams();
  const character = characters.find(c => String(c.id) === String(id));
  return <CharacterDetail character={character} />;
}

export default App;

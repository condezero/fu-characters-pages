
import CharacterCard from './components/CharacterCard';
import './App.css';

function App() {
  return (
    <main className="page-container">
      <h1 className="page-title">
        La caida de Ascalon
      </h1>
      <h2 className="page-subtitle">
         Arco 1. El nacimiento de los heroes.
      </h2>
      <div className="cards-grid">
        <CharacterCard
          title="Thormirr Hijo de Yggdrasil"
          left={<img src="https://placehold.co/100x100/222/ffcc00?text=IMG" alt="avatar" style={{ width: '80px', height: '80px' }} />}
          rightRows={[
            ['65', '32', '65'],
            ['35', '35'],
            ['6', '6'],
            ['10', '6']
          ]}
          borderColor="#ffcc00"
          separatorColor="#ffcc00"
        />
        <CharacterCard
          title="Niro"
          left={<img src="https://placehold.co/100x100/222/cc66ff?text=IMG" alt="avatar" style={{ width: '80px', height: '80px' }} />}
          rightRows={[
            ['40', '20', '40'],
            ['35', '35'],
            ['8', '8'],
            ['11', '11']
          ]}
          borderColor="#cc66ff"
          separatorColor="#ff99ff"
        />
        <CharacterCard
          title="Grigory"
          left={<img src="https://placehold.co/100x100/222/66ff66?text=IMG" alt="avatar" style={{ width: '80px', height: '80px' }} />}
          rightRows={[
            ['65', '32', '65'],
            ['50', '50'],
            ['6', '6'],
            ['11', '9']
          ]}
          borderColor="#66ff66"
          separatorColor="#00cc99"
        />
        <CharacterCard
          title="Lethe"
          left={<img src="https://placehold.co/100x100/222/3399ff?text=IMG" alt="avatar" style={{ width: '80px', height: '80px' }} />}
          rightRows={[
            ['45', '22', '45'],
            ['65', '65'],
            ['6', '6'],
            ['6', '8']
          ]}
          borderColor="#3399ff"
          separatorColor="#00e0ff"
        />
      </div>
    </main>
  );
}

export default App

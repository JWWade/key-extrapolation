import './App.css';
import Key from './components/key/key.tsx';
import { keyQualities } from './constants/keys.ts';
import { HarmonicStructure } from './utilities/keys/key-factory.ts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Key rootNote="C" quality={keyQualities.major.name} harmonicStructure={HarmonicStructure.Ternary} />
        <Key rootNote="C" quality={keyQualities.naturalMinor.name} harmonicStructure={HarmonicStructure.Ternary} />
        <Key rootNote="C" quality={keyQualities.harmonicMinor.name} harmonicStructure={HarmonicStructure.Ternary} />
        <Key rootNote="C" quality={keyQualities.diminished.name} harmonicStructure={HarmonicStructure.Ternary} />
      </header>
    </div>
  );
}

export default App;

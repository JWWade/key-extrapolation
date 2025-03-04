import './App.css';
import Chord from './components/chord/chord.tsx';
import { chordQualities } from './constants/chord-qualities.ts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chord name="C" quality={chordQualities.minor.name} />
        <Chord name="A" quality={chordQualities.diminished.name} />
        <Chord name="Gb" quality={chordQualities.major.name} />
        <Chord name="C" quality={chordQualities.major.name} />
      </header>
    </div>
  );
}

export default App;

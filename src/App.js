import './App.css';
import Words from './components/Words/Words';
import Chords from './components/Chords/Chords';
import Instrument from './components/Instrument/Instrument';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Generate a Song
        </h1>
        <Instrument/>
        <Chords />
        <Words />
        <button>
          Click Here
        </button>
      </header>
    </div>
  );
}

export default App;

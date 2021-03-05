import './App.css';
import chordData from './chordData';
import wordData from './wordData';


import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: '',
      chords: chordData[Math.floor(Math.random() * (chordData.length - 1))],
      words: [wordData[Math.floor(Math.random() * 370000)],
      wordData[Math.floor(Math.random() * 370000)],
      wordData[Math.floor(Math.random() * 370000)]
      ]};
  }


  selectInstrument() {
    if (this.state.instrument === ''){
      const instruments = ['guitar', 'ukulele'];
      let selectNum = Math.floor(Math.random() * 2);
      let selectedInstrument = instruments[selectNum];
      this.setState({
        instrument: selectedInstrument
      });
    }

  }

  render() {
    console.log(this.state)
    this.selectInstrument();

    return (
      <div>
        <h1>Generate a song!</h1>
        <h2>{this.state.instrument}</h2>
        <h2>{this.state.chords}</h2>
        <h2>{this.state.words}</h2>

        <button>Click Here</button>
      </div>
    );
  }
}



export default App;

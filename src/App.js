import './App.css';
import chordData from './chordData';
import wordData from './wordData';


import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: '',
      chords:'',
      words: []};
  }


  createState = () => {
    const randNum = (num) => {
      return Math.floor(Math.random() * num)
    }
    const instruments = ['guitar', 'ukulele'];
    const newInstrument = instruments[randNum(2)];
    const newWords = [wordData[randNum(wordData.length)]];
    const newChords = chordData[randNum(chordData.length)];

    this.setState({
      instrument: newInstrument,
      chords: newChords,
      words: newWords
    });
  }

  render() {

    return (
      <div>
        <h1>Generate a song!</h1>
        <h2>{this.state.instrument}</h2>
        <h2>{this.state.chords}</h2>
        {this.state.words.map(function(word, index){
          return <h2 key={ index }>{word}</h2>;
        })}

        <button onClick={this.createState}>Click Here</button>
      </div>
    );
  }
}



export default App;

import React from 'react';

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {instrument: ''};
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
    this.selectInstrument()
    return (
      <div>
        <h2>{this.state.instrument}</h2>
      </div>
    );
  }
}

export default Instrument;

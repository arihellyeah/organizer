import React from 'react';

class Chords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chords: ''};
  }

  render() {
    return (
      <div>
        <h1>A G B C</h1>
      </div>
    );
  }
}

export default Chords;

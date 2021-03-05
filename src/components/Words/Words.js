import React from 'react';

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {words: []};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default Words;

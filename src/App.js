import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;

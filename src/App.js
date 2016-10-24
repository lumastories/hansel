import React, { Component } from 'react';
import './App.css';

import {Login, Footer} from './Components.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HANSEL
        </div>
        <Login />
        <Footer />

      </div>
    );
  }
}

export default App;

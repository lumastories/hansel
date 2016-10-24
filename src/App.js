import React, { Component } from 'react';
import './App.css';

import {Login, Foo, Bar} from './Components.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HANSEL
        </div>
        <Login />
        <Foo />
        <Bar />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../public/logo.png';
import './App.css';

import {Login, Foo, Bar} from './Components.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Login />
        <Foo />
        <Bar />

      </div>
    );
  }
}

export default App;

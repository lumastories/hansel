import React, { Component } from 'react';
import logo from '../public/logo.png';
import './App.css';

class Login extends Component {
  // TODO: Move this to seperate file/folder? What structure should I use?
  // TODO: How should I reason about the "composibility" of 
  // these Components while taking routes into consideration?

  render() {
    return (
      <div className="Login">
        <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password"/><br/>
        <input type="submit" value="login"/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Login />
        
      </div>
    );
  }
}

export default App;

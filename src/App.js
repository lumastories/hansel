import React, { Component } from 'react'
import './App.css';

import {Navigation} from './Components/Navigation'
// import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      isLoading: true
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HANSEL
        </div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;

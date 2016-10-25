import React, { Component } from 'react'
import axios from 'axios'
import { Router, Route, Link } from 'react-router'

import './App.css';
import {Login, Footer} from './Components.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      luke: '',
      isLoading: true
    }
  }
  componentDidMount(){
    // overrides base class method, sets state
    axios.get('/api/people/1')
    .then((resp) => {
      this.setState({luke: resp.data, isLoading:false})
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HANSEL
        </div>
        {
          (this.state.isLoading) ? 'using the force...' : <p>{this.state.luke.name}</p>
        }
        <Login />
        <Footer />

      </div>
    );
  }
}

export default App;

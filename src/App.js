import React, { Component } from 'react'
import axios from 'axios'
// import { Router, Route, Link } from 'react-router'

import './App.css';
import {Login, Footer} from './Components.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      isLoading: true
    }
  }
  componentDidMount(){
    // overrides base class method, sets state
    axios.get('/auth/')
    .then((resp) => {
      this.setState({data: JSON.stringify(resp.data), isLoading:false})
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HANSEL
        </div>
        {
          (this.state.isLoading) ? 'loading...' : <p>{this.state.data}</p>
        }
        <Login />
        <Footer />

      </div>
    );
  }
}

export default App;

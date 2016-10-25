import React, { Component } from 'react'
import axios from 'axios'


import './App.css';
import {Navigation, Footer} from './Components.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      isLoading: true
    }
  }
  componentDidMount(){
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
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;

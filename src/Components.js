import React, { Component } from 'react'

class Footer extends Component { 
  render() { 
    return (
      <div className="footer">env: <b>{process.env.NODE_ENV}</b></div>
    ) 
  } 
}

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username: "", password: ""} 
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    debugger;
  }
  
  render() {
    return (
      <div className="Login">
        <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password"/><br/>
        <button onClick={this.handleSubmit} className="button">login</button>
      </div>
    )
  }
}

export {Login, Footer}
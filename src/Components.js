import React, { Component } from 'react'

export class Footer extends Component { 
  render() { 
    return (
      <div className="footer">env: <b>{process.env.NODE_ENV}</b></div>
    ) 
  } 
}

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username: "", password: ""} 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(fieldName) {
    return (event) => {
      this.setState({[fieldName]: event.target.value})
    }
  }

  handleSubmit(event) {
    // if function is not .bind() above, it would look at "this" for the function not the class
  }
  
  render() {
    let nicename = (this.state.username) ? <p><b>{this.state.username}</b> is such a nice name.</p> : ""
    return (
      <div className="Login">
        <input value={this.state.username}
          onChange={this.handleChange("username")}
          type="text" placeholder="username"/><br/>
        <input value={this.state.password}
          onChange={this.handleChange("password")} type="password" placeholder="password"/><br/>
        <button onClick={this.handleSubmit} className="button">login</button>
        {nicename}
      </div>
    )
  }
}

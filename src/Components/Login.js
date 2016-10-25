import React, { Component } from 'react'
import browserHistory from 'react-router'
import axios from 'axios'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username: "", password: "", badLogin:""} 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(fieldName) {
    return (event) => {
      this.setState({[fieldName]: event.target.value})
    }
  }

  handleSubmit(event) {
    axios.post('/auth/login/', {username: this.state.username, password: this.state.password})
    .then((resp) => {
      this.setState({auth_token: resp.data.auth_token})
      browserHistory.push('/kids')
    })
    .catch((error) => {
      this.setState({badLogin: 'Incorrect login. Try again.'})
    })
  }
  
  render() {
    let niceName = (this.state.username) ? <p><b>{this.state.username}</b> is such a nice name.</p> : ""
    let badLogin = (this.state.badLogin) ? <p className="error">{this.state.badLogin}</p> : ""
    return (
      <div className="Login">
        {badLogin}
        <input value={this.state.username}
          onChange={this.handleChange("username")}
          type="text" placeholder="username"/><br/>
        <input value={this.state.password}
          onChange={this.handleChange("password")} type="password" placeholder="password"/><br/>
        <button onClick={this.handleSubmit} className="button">login</button>
        {niceName}
      </div>
    )
  }
}
import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import axios from 'axios'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username: "", password: "", badLogin:""} 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    if(axios.defaults.headers.common['Authorization']) {
      browserHistory.push('/kids')
    }
  }

  handleChange(fieldName) {
    return (event) => {
      this.setState({[fieldName]: event.target.value})
    }
  }

  handleSubmit(event) {
    axios.post('/auth/login/', {username: this.state.username, password: this.state.password})
    .then((resp) => {
      axios.defaults.headers.common['Authorization'] = `Token ${resp.data.auth_token}`
      localStorage.setItem('token', resp.data.auth_token);
      browserHistory.push('/kids')
    })
    .catch((error) => {
      console.log(error)
      this.setState({badLogin: 'There was an error.'})
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

export class Logout extends Component {
    componentWillMount () {
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = ''
      browserHistory.push('/')
    }
    render () {return null}
}

export const lock = () => localStorage.getItem('token') ? true : browserHistory.push('/')



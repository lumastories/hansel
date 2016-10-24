import React, { Component } from 'react';

class Foo extends Component { render() { return (<div></div>) } }
class Bar extends Component { render() { return (<div></div>) } }

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password"/><br/>
        <input className="button" type="submit" value="login"/>
      </div>
    );
  }
}

export {Login, Foo, Bar};
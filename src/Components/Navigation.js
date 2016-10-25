import React, { Component } from 'react'
import {Link} from 'react-router'

export class NavLink extends Component {
  render(){
    return <Link {...this.props} activeClassName="active" />
  }
}

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/kids'>Kids</NavLink>
        </nav>
      </div>
    )
  }
}

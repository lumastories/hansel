import React, { Component } from 'react'
import {Link} from 'react-router'

export const NavLink = (props) => <Link {...props} activeClassName="active" /> 

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/logout'>logout</NavLink>
        </nav>
      </div>
    )
  }
}

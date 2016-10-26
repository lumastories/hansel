import React, { Component } from 'react'
import {Link} from 'react-router'

export const NavLink = (props) => <Link {...props} activeClassName="active" /> 

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink>
          <NavLink to='/kids'>Kids</NavLink>
          <NavLink to='/settings'>settings</NavLink>
          <NavLink to='/things'>things</NavLink>
        </nav>
      </div>
    )
  }
}

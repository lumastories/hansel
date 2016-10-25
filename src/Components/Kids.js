import React, { Component } from 'react'
import NavLink from './Navigation'

export class Kids extends Component {
  render() {
    return (
      <div>
        <h2>Kids</h2>
        <NavLink to='/kids/3'>Kid #3</NavLink>
        {this.props.children}
      </div>
    )
  }
}

export class Kid extends Component {
  render() {
    return (<div><p>a kid #{this.props.params.id}</p></div>)
  }
}

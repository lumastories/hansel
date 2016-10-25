import React, { Component } from 'react'

export class Kids extends Component {
  render() {
    return (
      <div>
        <h2>Kids</h2>
        
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

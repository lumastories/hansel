import React, { Component } from 'react'

export class KidList extends Component {
  render() {
    return (
      <div>
        <h2>Kids</h2>
        
        {this.props.children}
      </div>
    )
  }
}

export class KidDetail extends Component {
  render() {
    return (<div><p>a kid #{this.props.params.id}</p></div>)
  }
}

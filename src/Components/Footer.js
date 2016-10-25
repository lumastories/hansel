import React, { Component } from 'react'

export class Footer extends Component { 
  render() { 
    return (
      <div className="footer">env: <b>{process.env.NODE_ENV}</b></div>
    ) 
  } 
}
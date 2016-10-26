import React, { Component } from 'react'
import axios from 'axios'

export class KidList extends Component {
  constructor(){
    super()
    this.state = {
      kids: null
    }
  }
  componentDidMount(){
    axios.get('/api/participant')
    .then((resp) => {
      this.setState({kids: JSON.stringify(resp.data)})  
    })
  }
  render() {
    return (
      <div>
        <h2>Kids</h2>
        {this.state.kids}
      </div>
    )
  }
}

export class KidDetail extends Component {
  render() {
    return (<div><p>a kid #{this.props.params.id}</p></div>)
  }
}

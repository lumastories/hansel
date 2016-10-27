import React, { Component } from 'react'
import axios from 'axios'
import {lock} from './Auth'
import {Table} from 'reactable'

export class KidList extends Component {
  constructor(){
    super()
    this.state = {
      kids: null
    }
  }
  componentDidMount(){
    lock()
    axios.get('/api/participant')
    .then((resp) => {
      this.setState({kids: resp.data})
    })
  }
  render() {
    return (
      <div>
        <h2>Kids</h2>
        <Table className="table" data={this.state.kids} />
      </div>
    )
  }
}

export class KidDetail extends Component {
  render() {
    return (<div><p>a kid #{this.props.params.id}</p></div>)
  }
}

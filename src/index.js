import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {Login, Logout} from './Components/Auth'
import {KidList, KidDetail} from './Components/Kids'

import './index.css'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import axios from 'axios'
let token = localStorage.getItem('token')
if(token) {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/logout" component={Logout} />
      <Route path="/kids" component={KidList} >
        <Route path="/kids/:id" component={KidDetail}/>
      </Route>
    </Route>
  </Router>
  ),document.getElementById('root')
)

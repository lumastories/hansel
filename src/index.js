import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {Login} from './Components/Login'
import {KidList, KidDetail} from './Components/Kids'

import './index.css'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/kids" component={KidList} >
        <Route path="/kids/:id" component={KidDetail}/>
      </Route>
    </Route>
  </Router>
  ),document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Kids, Kid, Login, Home} from './Components.js'
import './index.css'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/kids" component={Kids} >
        <Route path="/kids/:id" component={Kid}/>
      </Route>
    </Route>
  </Router>
  ),document.getElementById('root')
)

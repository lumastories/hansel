import React, { Component } from 'react'
import './App.css';

import Navigation from './Components/Navigation'
// import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      isLoading: true
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HANSEL
        </div>
        {/* 
        TODO: when i include this i get an error:
warning.js:36 Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components). Check the render method of `App`.printWarning @ warning.js:36warning @ warning.js:60createElement @ ReactElementValidator.js:167render @ App.js:66(anonymous function) @ ReactCompositeComponent.js:793measureLifeCyclePerf @ ReactCompositeComponent.js:74_renderValidatedComponentWithoutOwnerOrContext @ ReactCompositeComponent.js:792_renderValidatedComponent @ ReactCompositeComponent.js:819performInitialMount @ ReactCompositeComponent.js:361mountComponent @ ReactCompositeComponent.js:257mountComponent @ ReactReconciler.js:47performInitialMount @ ReactCompositeComponent.js:370mountComponent @ ReactCompositeComponent.js:257mountComponent @ ReactReconciler.js:47performInitialMount @ ReactCompositeComponent.js:370mountComponent @ ReactCompositeComponent.js:257mountComponent @ ReactReconciler.js:47performInitialMount @ ReactCompositeComponent.js:370mountComponent @ ReactCompositeComponent.js:257mountComponent @ ReactReconciler.js:47mountComponentIntoNode @ ReactMount.js:105perform @ Transaction.js:138batchedMountComponentIntoNode @ ReactMount.js:127perform @ Transaction.js:138batchedUpdates @ ReactDefaultBatchingStrategy.js:63batchedUpdates @ ReactUpdates.js:98_renderNewRootComponent @ ReactMount.js:321_renderSubtreeIntoContainer @ ReactMount.js:402render @ ReactMount.js:423(anonymous function) @ index.js:33(anonymous function) @ bundle.js:1363__webpack_require__ @ bundle.js:556fn @ bundle.js:87(anonymous function) @ multi_main:3(anonymous function) @ bundle.js:589__webpack_require__ @ bundle.js:556(anonymous function) @ bundle.js:579(anonymous function) @ bundle.js:582
invariant.js:38 Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. Check the render method of `App`.
        <Navigation />

          */}
        {this.props.children}
      </div>
    );
  }
}

export default App;

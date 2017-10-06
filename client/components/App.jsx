import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Container from './Container'

const App = (props) => {
  return (
    <Router>
      <div className=''>
        <Route path="/" component={Header} />
        <Route path="/" component={Container} />
      </div>
    </Router>
  )
}

export default App

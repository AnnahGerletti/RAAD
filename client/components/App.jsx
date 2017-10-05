import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Container from './Container'


import data from '../../data/tasks'

const App = () => {
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

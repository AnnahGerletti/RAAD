import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Container from './Container'

import tasks from '../../data/tasks'

const App = () => {
  return (
    <Router>
      <div className=''>
        <Route path="/" component={Header} />
        <Route path="/" render ={ () => (
          <Container tasks = {(tasks)} />
        )} />
      </div>
    </Router>
  )
}

export default App

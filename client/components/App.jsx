import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'

import data from '../../data/ranks'

const App = () => {
  return (
    <Router>
      <div className=''>
        <Route path="/" component={Header} />
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Nav2 from './Nav2'
import Intro from './Intro'
import View from './View'

import data from '../../data/ranks'

const App = () => {
  const ranks = (Object.keys(data))
  return (
    <Router>
      <div className='container'>

        <div className="row">
          <div className="col s3">
            <Route path="/" component={Header} />
          </div>
          <div className="col s3">
            <Route exact path="/" component={Intro} />
          </div>
        </div>

        <div className="row">
          <div className = "col s2">
            <Route path="/" component={props => <Nav ranks={ranks} /> } />
          </div>
          <div className="col s2">
            <Route path="/list/:rank" component={Nav2} />
          </div>
          <div className="col s4">
            <Route exact path="/list/:rank/:name" component={View} />
          </div>
        </div>

      </div>
    </Router>
  )
}

export default App

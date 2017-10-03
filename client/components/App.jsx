import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Nav2 from './Nav2'
import Intro from './Intro'


import data from '../../data/ranks'

const App = () => {
  const ranks = (Object.keys(data))
  return (
    <Router>
      <div className='container'>
        <Route path="/" component={Header} />

        <div className="row">

          <div className = "col s3">
            <Route path="/" component={props => <Nav ranks={ranks} /> } />
          </div>

          <div className="col s9">
            <Route exact path="/" component={Intro} />
          </div>

          <div className="col s3">
            <Route exact path="/list/:rank" component={Nav2} />
          </div>

        </div>
      </div>
    </Router>
  )
}

export default App

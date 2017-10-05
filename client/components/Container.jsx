import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Todo from './Todo'
import Inprogress from './Inprogress'
import Blocked from './Blocked'
import Done from './Done'

const Container = () => {
  return (
    <div className = 'columns'>
      <Route path="/" component={Todo} />
      <Route path="/" component={Inprogress} />
      <Route path="/" component={Blocked} />
      <Route path="/" component={Done} />
    </div>
  )
}
export default Container

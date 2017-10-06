import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Todo from './Todo'
import Inprogress from './Inprogress'
import Blocked from './Blocked'
import Done from './Done'

const Container = (props) => {
  return (
    <div className = 'columns'>
      <Route path="/" component={() => <Todo title='To Do' />} />
      <Route path="/" component={()  => <Todo title='In Progress' />} />
      <Route path="/" component={() => <Todo title="Blocked" />} />
      <Route path="/" component={() => <Todo title="Done" />} />
     { // <Route path="/" component={Inprogress} />
      // <Route path="/" component={Blocked} />
      // <Route path="/" component={Done} />
    }</div>
  )
}
export default Container

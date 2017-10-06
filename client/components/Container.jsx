import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import tasks from '../../data/tasks'
import Todo from './Todo'
import Inprogress from './Inprogress'
import Blocked from './Blocked'
import Done from './Done'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: tasks
    }
  }

  render () {
    return (
      <div className = 'columns'>
        <Todo tasks={this.state.tasks.filter(task => task.currentCol === 0)} />
        <Inprogress tasks={this.state.tasks.filter(task => task.currentCol === 1)}/>
        <Blocked tasks={this.state.tasks.filter(task => task.currentCol === 2)} />
        <Done tasks={this.state.tasks.filter(task => task.currentCol === 3)} />
      </div>
    )
  }
}
export default Container

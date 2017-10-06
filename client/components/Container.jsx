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
    this.moveForward = this.moveForward.bind(this)
  }

  moveForward (id) {
    const idd = tasks.findIndex((task) => {
      return task.id === id
    })
    const newTasks = this.state.tasks.concat()

    newTasks[idd].currentCol += 1
    this.setState({tasks: newTasks})
  }

  render () {
    return (
      <div className = 'columns'>
        <Todo title="To-Do" moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 0)} />
        <Todo title="In Progress" moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 1)}/>
        <Todo title="Blocked" moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 2)} />
        <Todo title="Done" moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 3)} />
      </div>
    )
  }
}
export default Container

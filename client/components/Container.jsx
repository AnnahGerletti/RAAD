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
    this.moveBackward = this.moveBackward.bind(this)
  }

  
  moveForward (id) {
    const idd = tasks.findIndex((task) => {
      return task.id === id
    })
    const newTasks = this.state.tasks.concat()
    
    newTasks[idd].currentCol += 1
    this.setState({tasks: newTasks})
  }
  
  moveBackward(id) {
    const idd = tasks.findIndex((task) => {
      return task.id === id
    })
    const newTasks = this.state.tasks.concat()

    newTasks[idd].currentCol -= 1
    this.setState({ tasks: newTasks })
  }

  render () {
    return (
      <div className = 'columns'>
        <Todo moveBackward={this.moveBackward} moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 0)} />
        <Inprogress moveBackward={this.moveBackward} moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 1)}/>
        <Blocked moveBackward={this.moveBackward} moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 2)} />
        <Done moveBackward={this.moveBackward} moveForward={this.moveForward} tasks={this.state.tasks.filter(task => task.currentCol === 3)} />
      </div>
    )
  }
}
export default Container

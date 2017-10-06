import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import tasks from '../../data/tasks'
import columns from '../../data/columns'

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
    const filterTasks = (col_id) => this.state.tasks.filter(task => task.currentCol === col_id)
    return (
      <div className = 'columns'>
        {columns.map(column => 
          <Todo title={column.title} moveBackward={this.moveBackward} moveForward={this.moveForward} tasks={filterTasks(column.col_id)} />
        )}
      </div>
    )
  }
}
export default Container

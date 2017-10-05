import React from 'react'

class TaskCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moveTask: false
    }
  }
  render () {
    return (
      <div class="card is-primary">
        <header class="card-header">
          <p class="card-header-title">
            Task 1
          </p>
        </header>
        <div class="card-content">
          <p class="title">
            “Finish the project”
          </p>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">-</a> {' '}
          <a href="#" class="card-footer-item">Edit</a> {' '}
          <a href="#" class="card-footer-item">+</a>
        </footer>
      </div>
    )
  }
}

export default TaskCard

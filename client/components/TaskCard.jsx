import React from 'react'

class TaskCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      col_State: 0
    }
    this.moveForward =this.moveForward.bind(this)
  }
  moveForward () {
    this.setState({
      col_State: this.state.col_State++
    })
  }
  render () {
    return (
      <div className="card is-primary">
        <header className="card-header">
          <p className="card-header-title">
            Task 1
          </p>
        </header>
        <div className="card-content">
          <p className="">
            “Finish the project”
          </p>
        </div>
        <footer className="card-footer">
          <button className="card-footer-item">-</button>
          <button className="card-footer-item">Edit</button>
          <button className="card-footer-item" onClick={this.moveForward}>+</button>
        </footer>
      </div>
    )
  }
}

export default TaskCard

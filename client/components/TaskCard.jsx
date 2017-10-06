import React from 'react'

class TaskCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      col_State: 0
    }
    this.moveForward = this.moveForward.bind(this)
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
          <h4 className="card-header-title">
          Task 1
          </h4>
          <i style={{cursor: 'pointer'}} className='fa fa-trash'></i>
        </header>
        <div className="card-content">
          <p className="">
            “Finish the project”
          </p>
        </div>
        <footer className="card-footer">
          <button className="button is-dark is-medium card-footer-item">-</button>
          <button className="button is-dark is-medium card-footer-item">Edit</button>
          <button className="button is-dark is-medium card-footer-item" onClick={this.moveForward}>+</button>
        </footer>
      </div>
    )
  }
}

export default TaskCard

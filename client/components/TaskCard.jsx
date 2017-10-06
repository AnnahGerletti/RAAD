import React from 'react'

const TaskCard = (props) => {
  const task = props.task
  return (
    <div className="card is-primary">
      <header className="card-header">
        <p className="card-header-title">
          {`Task ID:${task.id}`}
        </p>
      </header>
      <div className="card-content">
        <p className="">
          {task.taskname}
        </p>
      </div>
      <footer className="card-footer">
        <button className="card-footer-item">-</button>
        <button className="card-footer-item">Edit</button>
        <button onClick={() => props.moveForward(task.id)} className="card-footer-item">+</button>
      </footer>
    </div>
  )
}

export default TaskCard

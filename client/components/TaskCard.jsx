import React from 'react'

const TaskCard = (props) => {
  const task = props.task
  return (
    <div className="card is-primary">
      <header className="card-header">
        <p className="card-header-title">
          {`Task ID:${task.id}`}
        </p>
        <i style={{ cursor: 'pointer' }} className='fa fa-trash'></i>
      </header>
      <div className="card-content">
        <p className="">
          {task.taskname}
        </p>
      </div>
      <footer className="card-footer">
        
        <button onClick={() => props.moveBackward(task.id)} className="card-footer-item button is-dark">-</button>
        <button className="card-footer-item button is-dark">Edit</button>
        <button onClick={() => props.moveForward(task.id)} className="card-footer-item button is-dark">+</button>
      </footer>
    </div>
  )
}

export default TaskCard

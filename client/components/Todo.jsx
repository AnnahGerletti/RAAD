import React from 'react'

import TaskCard from './TaskCard'

const Todo = (props) => {
  return (
    <div className='column container is-outlined box has-text-centered' >
      <span className='tile is-parent is-primary'>
        <h3 className='title is-3'>{props.title}</h3>
      </span>
      <hr />
      <div className='content'>
        {props.tasks.map(task => {
          return < TaskCard key={task.id} moveForward= {props.moveForward} task={task} />
        })}
      </div>
    </div>
  )
}
export default Todo

import React from 'react'

import TaskCard from './TaskCard'

const Todo = (props) => {
  return (
    <div className='column container is-outlined box has-text-centered' >
      <span className='tile is-parent is-primary'>
        <div className='content'>
          <h3 className='title is-3'>{props.title}</h3>
          <hr />
          <TaskCard />
        </div>
      </span>
    </div>
  )
}
export default Todo

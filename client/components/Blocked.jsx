import React from 'react'

import TaskCard from './TaskCard'

const Todo = () => {
  return (
    <div className='column container is-outlined box has-text-centered' style={{ minHeight: '60vh' }}>
      <span className='tile is-parent is-primary'>
        <div className='content'>
          <h3 className='title is-3'>Stuck!</h3>
          <hr />
          <TaskCard />
        </div>
      </span>
    </div>
  )
}
export default Todo

import React from 'react'

import TaskCard from './TaskCard'

const Inprogress = (props) => {
  const tasks = props.tasks
  
  return (
    <div className='column'>
      <h3> Working on </h3>
      {tasks.map(task => {
        return < TaskCard key={task.id} moveForward={props.moveForward} task={task} />
      })}
    </div>
  )
}
export default Inprogress

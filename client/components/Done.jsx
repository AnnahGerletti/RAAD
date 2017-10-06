import React from 'react'

import TaskCard from './TaskCard'

const Done = (props) => {
  const tasks = props.tasks

  return (
    <div className = 'column'>
      <h3> Finished </h3>
      {tasks.map(task => {
        return < TaskCard key={task.id} moveForward={props.moveForward} moveBackward={props.moveBackward} task={task} />
      })}
    </div>
  )
}
export default Done

import React from 'react'

function ToDoItem(props)  {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={props.tas.completed}
        onChange={() => props.handleChange(props.task.id)}
      />
      <p>{props.task.text}</p>
    </div>
  )
}

export default ToDoItem
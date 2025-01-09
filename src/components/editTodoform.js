import React from 'react'
import { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    // We will make use of useState inorder for us
    // to manage the input value and form submission
    const [value, setTask] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        // We will then add the task to the tasks array
        // and reset the input field
        // After this, we will clear the input field
        editTodo(value, task.id);
        setTask("");
    }

    return (
    // We will then add a function below that captures the input value
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update task' onChange={(e) => setTask(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

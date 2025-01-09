import React from 'react'
import { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    // We will make use of useState inorder for us
    // to manage the input value and form submission
    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // We will then add the task to the tasks array
        // and reset the input field
        // After this, we will clear the input field
        addTodo(task);
        setTask("");
    }

    return (
    // We will then add a function below that captures the input value
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={task} placeholder='What is the task for today ?' onChange={(e) => setTask(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}

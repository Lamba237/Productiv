import React from 'react';
import {useState } from 'react';
import { TodoForm } from './todoForm';
import { Todo } from './todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }

  return (
    <div className='TodoWrapper'>
    <h1>Productiv - Todo List</h1>
    <TodoForm addTodo={addTodo} />
    {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
    ))}
    </div>
  )
}
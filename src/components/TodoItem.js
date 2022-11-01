/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem({ todo, handleChange, delTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <button onClick={() => delTodo(todo.id)}>Delete</button>
      {todo.title}
    </li>
  );
}

export default TodoItem;

import React from 'react';
import Item from './todo_list_item';

export const TodoList = ({ todos, receiveTodo }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <Item key={ todo.id } todo={ todo } />
      ))}
    </ul>
  );
};

export default TodoList;

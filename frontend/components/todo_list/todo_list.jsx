import React from 'react';
import Item from './todo_list_item';
import TodoForm from './todo_form';
import { uniqueId } from '../../util/unique_id';

export const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <Item  todo={ todo } key={`${idx}-${uniqueId()}`} removeTodo={ removeTodo } receiveTodo ={ receiveTodo } />
      ))}
      <TodoForm receiveTodo={ receiveTodo } />
    </ul>
  );
};

export default TodoList;

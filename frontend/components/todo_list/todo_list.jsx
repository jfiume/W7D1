import React from 'react';
import Item from './todo_list_item';
import TodoForm from './todo_form';

export const TodoList = ({ todos, receiveTodo }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <section key={ todo.id }>
          <Item  todo={ todo } />
        </section>
      ))}
      <TodoForm receiveTodo={ receiveTodo }/>
    </ul>
  );
};

export default TodoList;

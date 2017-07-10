import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { getAllTodos } from './reducers/selectors';
import {receiveTodo, receiveTodos} from './actions/todos_actions';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.getAllTodos = getAllTodos;
  window.store = store;
  ReactDOM.render(
    <Root store={ store }/>, root
  );
});

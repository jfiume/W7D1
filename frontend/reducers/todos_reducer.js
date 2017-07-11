import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todos_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
    case REMOVE_TODO:
      console.log('test');
      newState = merge({}, state);
      console.log(action);
      delete newState[action.todo.id];
      return  newState;
    default:
      return state;
  }
};

import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo } from '../../actions/todos_actions';
import { getAllTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;

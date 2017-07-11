import React from 'react';

class TodoListItem extends React.Component{

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleStatus(event) {
    event.preventDefault();
    let todo = Object.assign({}, this.props.todo);

    if (!todo.done) {
        todo.done = true;
    } else {
      todo.done = false;
    }
    this.props.receiveTodo(todo);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }



  render() {
    const buttontext = this.props.todo.done ? "Undo" : "Done";
    return (
      <li>
        <h2> {this.props.todo.title} </h2>
        <button className="btn btn-primary" onClick={this.handleStatus}>{buttontext}</button>
        <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;

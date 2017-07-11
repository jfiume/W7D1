import React from 'react';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  newForm () {
    return (event => {
      event.preventDefault();
      this.setState({title: document.getElementsByClassName(".title")});
      console.log(this.state);
    });
  }

  handleChange(field){
    return (event) => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
  }

  render () {
    return (
      <div>
        <form>
          <label> Title:
            <input className="title" type="text" onChange={this.handleChange('title')}></input>
          </label>
          <br></br>
          <label> Description:
            <input type="text" onChange={this.handleChange('description')}></input>
          </label>
          <input onClick={this.handleSubmit} type="submit" value="Create Step!"></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;

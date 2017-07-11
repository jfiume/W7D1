import React from 'react';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  newForm () {
    console.log("inside the new form");
    return (event => {
      event.preventDefault();
      this.setState({title: document.getElementByClassName(".title")});
  });
}

  render () {
    return (
      <div>
        <form>
          <label> Title:
            <input className="title" type="text"></input>
          </label>
          <br></br>
          <label> Description:
            <input type="text"></input>
          </label>
          <input onClick={this.newForm()} type="submit" value="Create Step!"></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;

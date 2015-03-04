let React = require('react'),
    TodoItem = require('./TodoItem'),
    TodoActions = require('../actions/TodoActions'),
    ReactPropTypes = React.PropTypes;

let TodoList = React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },
  render() {
    //The list should be hidden if there are no todos
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let todos = [];
    let allTodos = this.props.allTodos;

    for (let key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="todos-container">
        <input
          id="toggle-all"
          type="checkbox"
          //onChange={this._onToggleCompleteAll}
          //checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }
});

module.exports = TodoList;

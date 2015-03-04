let React = require('react'),
    TodoActions = require('../actions/TodoActions'),
    ReactPropTypes = React.PropTypes;

let TodoItem = React.createClass({
  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },
  getInitialState() {
    return null;
  },
  render() {
    // return null;
    let todo = this.props.todo;

    return (
      <li
        className='todo-item'
        key={todo.id}
      >
        {todo.text}
      </li>

    )
  }
});

module.exports = TodoItem;

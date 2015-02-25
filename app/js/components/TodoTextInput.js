let React = require('react'),
    ReactPropTypes = React.PropTypes;

const KEY_CODE_ENTER = 13;

let TodoTextInput = React.createClass({
  getInitialState() {
    return null;
  },
  render() {
    return (
      <input
        className="test"
        id="todo-text-input"
        placeholder="What needs to be done?"
        autofocus
      />
    );
  }
});

module.exports = TodoTextInput;

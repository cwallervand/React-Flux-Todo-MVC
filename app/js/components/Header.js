let React = require('react'),
    TodoTextInput = require('./TodoTextInput'),
    TodoActions = require('../actions/TodoActions');

let Header = React.createClass({
  _onSave(todoText) {
    if (todoText.trim() !== '') {
      console.log('Header: _onSave()');
      TodoActions.create(todoText);
    }
  },
  render() {
    return (
      <header id="app-header">
        <TodoTextInput
          id="todo-text-input"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    )
  }
});

module.exports = Header;

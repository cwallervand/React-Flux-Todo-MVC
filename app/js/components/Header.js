let React = require('react'),
    TodoTextInput = require('./TodoTextInput');

let Header = React.createClass({
  render() {
    return (
      <header id="app-header">
        <TodoTextInput />
      </header>
    )
  }
});

module.exports = Header;

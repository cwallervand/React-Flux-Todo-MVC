let React = require('react'),
    Header = require('./Header'),
    TodoList = require('./TodoList');
    //TodoStore = require('../stores/TodoStore');

function getTodoState() {
    return {
      allTodos: null,
      areAllComplete: null
    }
}

let TodoApp = React.createClass({
  _onChange() {
    this.setState(getTodoState());
  },
  //Invoked once before the component is mounted
  getInitialState() {
    console.log('GetInitialState');
    return getTodoState();
    //return null;
  },
  //Invoked once, only on the client, immediately after the initial rendering occurs.
  componentDidMount() {
    console.log('ComponentDidMount')
  },
  render() {
    return (
      <div id='todo-app'>
        <Header />
      </div>
    );
  }
});

module.exports = TodoApp;

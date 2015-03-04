let React = require('react'),
    Header = require('./Header'),
    TodoList = require('./TodoList'),
    TodoStore = require('../stores/TodoStore');

function getTodoState() {
    return {
      allTodos: TodoStore.getAll(),
      areAllComplete: TodoStore.areAllComplete()
    }
}

let TodoApp = React.createClass({
  _onChange() {
    this.setState(getTodoState());
  },
  //Invoked once before the component is mounted
  getInitialState() {
    let state = getTodoState();
    return state;
  },
  //Invoked once, only on the client, immediately after the initial rendering occurs.
  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },
  render() {
    return (
      <div id='todo-app'>
        <Header />
        <TodoList
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
      </div>
    );
  }
});

module.exports = TodoApp;

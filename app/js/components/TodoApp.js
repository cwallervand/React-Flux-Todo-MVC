let React = require('react'),
    Header = require('./Header');

let TodoApp = React.createClass({
  //Invoked once before the component is mounted
  getInitialState() {
    console.log('GetInitialState');
    return null;
  },
  //Invoked once, only on the client, immediately after the initial rendering occurs.
  componentDidMount() {
    console.log('ComponentDidMount')
  },
  handleClick() {
    console.log('clicked')
  },
  render() {
    return (
      <div id='todo-app' onClick={this.handleClick}>
        <Header />
      </div>
    );
  }
});

module.exports = TodoApp;

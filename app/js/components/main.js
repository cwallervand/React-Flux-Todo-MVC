var React = require('react');

var Main = React.createClass({
  handleClick() {
    console.log('clicked')
  },
  render() {
    return (<div onClick={this.handleClick}>Hello</div>);
  }
});

module.exports = Main;

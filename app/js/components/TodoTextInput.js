let React = require('react'),
    ReactPropTypes = React.PropTypes;

const KEY_CODE_ENTER = 13;

let TodoTextInput = React.createClass({
  //Prop validation to ensure that the component is used correctly
  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },
  //Must return an object or null
  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },
  //Save the todo with the value (state)
  _save() {
    console.log('TodoTextInput _save()');
    this.props.onSave(this.state.value);
    //After saving set the value back to an empty string
    this.setState({
      value: ''
    });
  },
  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  },
  //When enter is pressed we want to save the todo
  _onKeyDown(event) {
    if (event.keyCode === KEY_CODE_ENTER) {
      console.log('TodoTextInput _onKeyDown() ENTERS')
      this._save();
    }
  },
  render() {
    //Having the attributes as props makes the component very reusable
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autofocus={true}
      />
    );
  }
});

module.exports = TodoTextInput;

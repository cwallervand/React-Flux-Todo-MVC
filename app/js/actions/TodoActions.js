let AppDispatcher = require('../dispatcher/AppDispatcher'),
    TodoConstants = require('../constants/TodoConstants');

//Define different actions of the app
let TodoActions = {
  //Action for creating a Todo
  create(todoText) {
    //Dispatch a message with a type and a payload
    AppDispatcher.dispatch({
      //The name of the action
      actionType: TodoConstants.actionNames.TODO_CREATE,
      //The payload to send
      text: todoText
    });
  }
};

module.exports = TodoActions;

// require("babel/polyfill");

let AppDispatcher = require('../dispatcher/AppDispatcher'),
    TodoConstants = require('../constants/TodoConstants'),
    EventEmitter = require('events').EventEmitter,
    Assign = require('object-assign');

let _todos = {},
    todoId=0;

const CHANGE_EVENT = 'change';

function create(text) {
  let id = todoId++;
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

//Object.assign is a ES6
let TodoStore = Assign({}, EventEmitter.prototype, {
  areAllComplete() {
    for (let id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },
  getAll() {
    return _todos;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
});

//Register callbacks to handle updates
AppDispatcher.register((action) => {
  let text;
  switch(action.actionType) {
    //Create Todo item
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
      }
      TodoStore.emitChange();
      break;
  }
});

module.exports = TodoStore;

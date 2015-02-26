let AppDispatcher = require('../dispatcher/AppDispatcher'),
    TodoConstants = require('../constants/TodoConstants');
    //EventEmitter = require('events').EventEmitter;

let _todos = {},
    todoId=0;

const CHANGE_EVENT = 'change';


// function create(text) {
//   let id = todoId++;
//   _todos[id] = {
//     id: id,
//     complete: false,
//     text: text
//   };
// }

// let TodoStore = Object.assign({}, EventEmitter.prototype, {
//   emitChange() {
//     console.log('todostore', TodoConstants);
//     //this.emit(CHANGE_EVENT);
//   }
// });
//
// //Register callbacks to handle updates
// AppDispatcher.register((action) => {
//   let text;
//   console.log('appdispatcher.register',TodoConstants);
//   switch(action.actionType) {
//     case TodoConstants.TODO_CREATE:
//       text = action.text.trim();
//       if (text !== '') {
//         create(text);
//       }
//       TodoStore.emitChange();
//       break;
//   }
// });

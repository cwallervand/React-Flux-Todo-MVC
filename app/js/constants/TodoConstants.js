let Keymirror = require('keymirror');
//Define action names
module.exports = Keymirror({
  TODO_CREATE: null,
  TODO_COMPLETE: null,
  TODO_DESTROY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE: null,
  TODO_UNDO_COMPLETE: null,
  TODO_UPDATE_TEXT: null
});
// exports.actionNames = Keymirror({
//   TODO_CREATE: null,
//   TODO_COMPLETE: null,
//   TODO_DESTROY: null,
//   TODO_DESTROY_COMPLETED: null,
//   TODO_TOGGLE_COMPLETE: null,
//   TODO_UNDO_COMPLETE: null,
//   TODO_UPDATE_TEXT: null
// });
//
// exports.eventNames = {
//   TODO_CHANGE: 'change'
// };

// module.exports = {
//   actionNames() {
//     return Keymirror({
//       TODO_CREATE: null,
//       TODO_COMPLETE: null,
//       TODO_DESTROY: null,
//       TODO_DESTROY_COMPLETED: null,
//       TODO_TOGGLE_COMPLETE: null,
//       TODO_UNDO_COMPLETE: null,
//       TODO_UPDATE_TEXT: null
//     })
//   },
//   eventNames() {
//     return {
//       TODO_CHANGE: 'change'
//     }
//   }
// };

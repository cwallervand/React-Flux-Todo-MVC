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

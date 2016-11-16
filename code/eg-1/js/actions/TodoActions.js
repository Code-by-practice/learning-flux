import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

let TodoActions = {
  create: (text) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text
    });
  }
};

module.exports = TodoActions;

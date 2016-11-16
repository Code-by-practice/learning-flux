import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import assign from 'object-assign';

let _todos = {};

function create(text) {
  let _id = (new Date() + Math.floor(Math.rendom() * 99999)).toString(36);
  _todos[_id] = {
    id: _id,
    complete: false,
    text
  };
}

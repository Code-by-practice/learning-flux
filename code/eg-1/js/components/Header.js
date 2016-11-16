import React from 'react';
import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <TodoTextInput
          id="new-todo"
          placeholder="What next?"
          onSave={this._onSave} />
      </header>
    );
  }

  _onSave(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  }
};

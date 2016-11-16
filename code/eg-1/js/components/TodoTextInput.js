import React, { PropTypes } from 'react';

export default class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || ''
    }
  }

  propTypes: {
    id: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        onChange={this._onChange.bind(this)}
        onBlur={this._save.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
        autoFocus={true} />
    );
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  _onKeyDown(e) {
    if (e.keyCode === 13) {
      this._save();
    }
  }

};

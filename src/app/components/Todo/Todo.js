'use strict';
import React, { PropTypes } from 'react';

const Todo = (props) => (
  <li className="todo__item" onClick={props.onClick}>
    {props.text} {props.completed ? <span className="todo__item--done"></span> : false}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;

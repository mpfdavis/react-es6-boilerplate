'use strict';
import React, { PropTypes } from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => (
  <ul className="todo__list">
    {props.todos.map(todo =>
      <Todo key={todo.id} {...todo} onClick={() => props.onClick(todo.id) } />
    ) }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired
};

export default TodoList;

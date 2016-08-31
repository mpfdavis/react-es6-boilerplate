'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {

  let inputAsRef;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputAsRef.value.trim()) {
      return;
    }
    dispatch(addTodo(inputAsRef.value));
    inputAsRef.value = '';
  }

  return (
    <div>
      <form className="todo__form" onSubmit={handleSubmit}>
        <input className="todo__input" ref={node => { inputAsRef = node } } />
        <button className="todo__button" type="submit">Add</button>
      </form>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;

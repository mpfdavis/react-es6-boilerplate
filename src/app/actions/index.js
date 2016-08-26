'use strict';

let _nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: _nextTodoId++,
    text
  };
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

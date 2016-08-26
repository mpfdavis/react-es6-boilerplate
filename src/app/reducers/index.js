'use strict';
import { combineReducers } from 'redux';
import todos from './todos';
import filters from './filters';

const todoApp = combineReducers({
  todos,
  filters
});

export default todoApp;

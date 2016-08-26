'use strict';
import React from 'react';
import FilterLink from '../../containers/FilterActive';
import './Filter.css';

const Filter = () => (
  <div>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Todo</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Done</FilterLink>
  </div>
);

export default Filter;

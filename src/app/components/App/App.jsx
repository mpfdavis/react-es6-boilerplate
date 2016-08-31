'use strict';
import React from 'react';
import Filter from '../Filter';
import TodoAdd from '../../containers/TodoAdd';
import TodoVisible from '../../containers/TodoVisible';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div>
    <div className="app">
      <div className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <h1>Welcome to React</h1>
      </div>
      <p className="app__intro">
        To get started, edit <code>src/app</code> and save to reload.
      </p>
    </div>
    <div className="app__example">
      <div className="todo">
        <div className="todo__header">
          <h2>Todo list</h2>
        </div>
        <TodoAdd />
        <TodoVisible />
        <div className="filter">
          <Filter />
        </div>
      </div>
    </div>
  </div>
);

export default App;

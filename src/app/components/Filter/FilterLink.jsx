'use strict';
import React, { PropTypes } from 'react';

const FilterLink = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  if (props.isActive) {
    return <span className="filter__button filter__button--active">{props.children}</span>;
  }

  return <a href="#" className="filter__button" onClick={handleClick}>{props.children}</a>;

};

FilterLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterLink;

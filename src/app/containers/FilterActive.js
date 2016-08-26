'use strict';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import FilterLink from '../components/Filter/FilterLink';

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: ownProps.filter === state.filters
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  };
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

export default Filter;

'use strict';
import React from 'react';
import FilterLink from '../FilterLink';
import renderer from 'react-test-renderer';

describe('FilterLink', () => {

    const mockEvent = new Event("onClick");
    mockEvent.preventDefault = (e) => {}

    const mockHandler = () => {}

    it('renders correctly', () => {
        const tree = renderer.create(
            <FilterLink onClick={mockHandler} isActive={false}>All</FilterLink>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders as a span when isActive is true', () => {
        const tree = renderer.create(
            <FilterLink onClick={mockHandler} isActive={true}>All</FilterLink>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders as with active css class when isActive is true', () => {
        const tree = renderer.create(
            <FilterLink onClick={mockHandler} isActive={true}>All</FilterLink>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('fires event for supplied onClick handler', () => {
        const component = renderer.create(
            <FilterLink onClick={mockHandler} isActive={false}>All</FilterLink>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        tree.props.onClick(mockEvent);
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

});
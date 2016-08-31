'use strict';
import React from 'react';
import Todo from '../Todo';
import renderer from 'react-test-renderer';

describe('Todo', () => {

    const mockEvent = new Event("onClick");
    mockEvent.preventDefault = (e) => { }

    const mockHandler = () => { }

    it('renders correctly', () => {
        const tree = renderer.create(
            <Todo text="This is a todo item" completed={false} onClick={mockHandler} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with span when completed is true', () => {
        const tree = renderer.create(
            <Todo text="This is a todo item" completed={true} onClick={mockHandler} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('fires event for supplied onClick handler', () => {
        const component = renderer.create(
            <Todo text="This is a todo item" completed={false} onClick={mockHandler} />
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
import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

const app = shallow(
    <App />
)

describe('App component', () => {

    it('should render a h1', () => {
        expect(app.find('h1')).toBeDefined();
    });

    it('should render an img', () => {
        expect(app.find('img')).toBeDefined();
    });

});

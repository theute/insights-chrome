import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Brand from '../Brand';

const mockStore = configureMockStore();

describe('Brand component', () => {

    let store;

    beforeEach(() => {
        const initialState = {
            chrome: {
                navHidden: false,
                toggleNav: {}
            }
        };

        store = mockStore(initialState);
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            <Brand store={ store } />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // TODO: Simulate button click

});
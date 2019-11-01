import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Brand } from '../Brand';

const mockStore = configureMockStore();

describe('Brand component', () => {

    const mockOnClick = jest.fn();

    const initialState = {
        chrome: {
            navHidden: false,
            toggleNav: () => { return; }
        }
    }

    const store = mockStore(initialState);

    it('should render correctly', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Brand/>
            </Provider>
        );
        const component = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
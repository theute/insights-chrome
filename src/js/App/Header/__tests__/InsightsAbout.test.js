import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import InsightsAbout from '../InsightsAbout';
import fetch from 'node-fetch';

const mockStore = configureMockStore();

describe('InsightsAbout component', () => {

    let store;

    beforeEach(() => {
        const initialState = {
            chrome: { 
                user: { 
                    identity: { 
                        user: {}
                    } 
                }, 
                appId: 'fakeAppId',
                globalNav: '',
                activeApp: 'fakeAppId'
            }
        };

        store = mockStore(initialState);
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            <InsightsAbout store={ store }/>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
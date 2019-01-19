import {shallow} from "enzyme";
import * as React from 'react';
import Navigation from './Navigation';

const setup = () => {
    return shallow(<Navigation />)
};

it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
});

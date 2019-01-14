import * as React from 'react';
import Navigation from './Navigation';
import {shallow} from "enzyme";

const setup = () => {
    return shallow(<Navigation />)
};

it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
});

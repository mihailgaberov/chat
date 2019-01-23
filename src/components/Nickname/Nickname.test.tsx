import {shallow} from 'enzyme';
import * as React from 'react';
import Nickname from './Nickname';

const setup = () => {
  return shallow(<Nickname />)
};

describe('Nickname component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

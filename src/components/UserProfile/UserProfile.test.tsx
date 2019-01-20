import {shallow} from 'enzyme';
import * as React from 'react';
import UserProfile from './UserProfile';

const setup = () => {
  return shallow(<UserProfile />)
};

describe('UserProfile component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

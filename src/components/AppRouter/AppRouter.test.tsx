import { shallow } from 'enzyme';
import * as React from 'react';
import { AppRouter } from './AppRouter';

const setup = () => {
  return shallow(<AppRouter/>)
};

describe('AppRouter component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

import {shallow} from 'enzyme';
import * as React from 'react';
import ResetButton from './ResetButton';

const setup = () => {
  return shallow(<ResetButton />)
};

describe('ResetButton component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

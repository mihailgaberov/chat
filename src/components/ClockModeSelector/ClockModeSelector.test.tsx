import {shallow} from 'enzyme';
import * as React from 'react';
import ClockModeSelector from './ClockModeSelector';

const setup = () => {
  return shallow(<ClockModeSelector />)
};

describe('ClockModeSelector component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

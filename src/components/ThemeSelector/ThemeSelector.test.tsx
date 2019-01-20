import {shallow} from 'enzyme';
import * as React from 'react';
import ThemeSelector from './ThemeSelector';

const setup = () => {
  return shallow(<ThemeSelector />)
};

describe('ThemeSelector component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

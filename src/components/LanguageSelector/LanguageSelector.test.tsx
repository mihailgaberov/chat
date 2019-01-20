import {shallow} from 'enzyme';
import * as React from 'react';
import LanguageSelector from './LanguageSelector';

const setup = () => {
  return shallow(<LanguageSelector />)
};

describe('LanguageSelector component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

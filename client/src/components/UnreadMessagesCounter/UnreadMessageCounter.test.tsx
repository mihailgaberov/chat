import {shallow} from 'enzyme';
import * as React from 'react';
import UnreadMessageCounter from './UnreadMessageCounter';

const setup = (count = 1) => {
  return shallow(<UnreadMessageCounter count={count}/>)
};

describe('UnreadMessageCounter component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render only when count > 0', () => {
    let wrapper = setup(0);
    expect(wrapper.text()).toBe('');
    wrapper = setup(12);
    expect(wrapper.text()).toBe('12');
  });
});

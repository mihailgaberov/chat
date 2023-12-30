import {shallow} from 'enzyme';
import * as React from 'react';
import Nickname from './Nickname';

const setup = (username = '') => {
  return shallow(<Nickname value={username}/>)
};

describe('Nickname component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render user name if given', () => {
    let wrapper = setup();
    expect(wrapper.text()).toBe('');
    wrapper = setup('guest0001');
    expect(wrapper.text()).toBe('guest0001');
  });
});

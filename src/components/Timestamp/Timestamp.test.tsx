import { shallow } from 'enzyme';
import * as React from 'react';
import Timestamp from './Timestamp';

const setup = (value = '') => {
  return shallow(<Timestamp value={value} floatToRight={true}/>)
};

describe('Timestamp component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should be able to render properly value passed as prop', () => {
    let wrapper = setup();
    expect(wrapper.text()).toBe('');
    wrapper = setup('11:22');
    expect(wrapper.text()).toBe('11:22');
  });
});

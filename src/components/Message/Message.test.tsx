import {shallow} from 'enzyme';
import * as React from 'react';
import Message from './Message';

const setup = () => {
  return shallow(<Message type={'sent'}/>)
};

describe('Message component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

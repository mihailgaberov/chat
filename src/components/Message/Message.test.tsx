import {shallow} from 'enzyme';
import * as React from 'react';
import Message from './Message';

const setup = () => {
  return shallow(<Message message={{from: 'guest0001', content: 'hi', time: '11:03', type: 'sent'}}/>)
};

describe('Message component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';
import Nickname from '../Nickname';
import Timestamp from '../Timestamp';

const setup = (type = 'received') => {
  return shallow(<Message message={{from: 'guest0001', content: 'hi', time: '11:03', type}}/>)
};

describe('Message component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it('should render a message with nickname and time when receiving', () => {
    const wrapper = setup();
    expect(wrapper.find(Nickname).length).toBe(1);
    expect(wrapper.find(Timestamp).length).toBe(1);
  });

  it('should render a message with only time when sending', () => {
    const wrapper = setup('sent');
    expect(wrapper.find(Nickname).length).toBe(0);
    expect(wrapper.find(Timestamp).length).toBe(1);
  });
});

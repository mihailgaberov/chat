import { shallow } from 'enzyme';
import * as React from 'react';
import { ChatArea } from './ChatArea';
import Message, { IMessage } from '../Message/Message';

const message: IMessage = {from: 'test', content: 'test test', time: '11:11', type: 'sent'};

const setup = () => {
  // @ts-ignore
  return shallow(<ChatArea messages={[message, message]}/>)
};

describe('ChatArea component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render correct number of messages', () => {
    const wrapper = setup();
    expect(wrapper.find(Message).length).toEqual(2);
  })
});

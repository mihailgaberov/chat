import { shallow } from 'enzyme';
import * as React from 'react';
import { MessageSender } from './MessageSender';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  // @ts-ignore
  return shallow(<MessageSender sendMessage={jest.fn()}/>)
};

describe('MessageSender component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should call sendChatMessage on click Send button', () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    // @ts-ignore
    const spy = jest.spyOn(instance, 'sendChatMessage');
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should clear send messages input on click Send button', () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    instance.setState({ chatMessage: 'test' }, () => {
      expect(wrapper.find('input').props().value).toBe('test');
    });

    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').props().value).toBe('');
  });


});

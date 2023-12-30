import {shallow} from 'enzyme';
import * as React from 'react';
import ChatPage from './ChatPage';

const setup = () => {
  return shallow(<ChatPage />)
};

describe('ChatPage', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

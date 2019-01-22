import {shallow} from 'enzyme';
import * as React from 'react';
import ChatArea from './ChatArea';

const setup = () => {
  return shallow(<ChatArea />)
};

describe('ChatArea component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

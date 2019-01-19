import {shallow} from 'enzyme';
import * as React from 'react';
import UnreadMessageCounter from './UnreadMessageCounter';

const setup = () => {
  return shallow(<UnreadMessageCounter count={23}/>)
};

describe('UnreadMessageCounter component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

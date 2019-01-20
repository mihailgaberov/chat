import {shallow} from 'enzyme';
import * as React from 'react';
import SendingOptions from './SendingOptions';

const setup = () => {
  return shallow(<SendingOptions />)
};

describe('SendingOptions component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

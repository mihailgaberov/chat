import { shallow } from 'enzyme';
import * as React from 'react';
import Timestamp from './Timestamp';

const setup = () => {
  return shallow(<Timestamp value={'10:03'} floatToRight={true}/>)
};

describe('Timestamp component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

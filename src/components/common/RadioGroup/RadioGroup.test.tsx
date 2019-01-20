import {shallow} from 'enzyme';
import * as React from 'react';
import RadioGroup from './RadioGroup';

const setup = () => {
  return shallow(<RadioGroup isLeftChecked={true}
                                radioGroupName={'test'}
                                leftRadioLabel={'Light'}
                                rightRadioLabel={'Dark'}
                                leftRadioValue={'Light'}
                                rightRadioValue={'Dark'}
                                callback={jest.fn()}
                  />)
};

describe('RadioGroup component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

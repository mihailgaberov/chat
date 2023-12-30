import {shallow} from 'enzyme';
import * as React from 'react';
import RadioGroup from './RadioGroup';

const setup = (isLeftChecked = true) => {
  return shallow(<RadioGroup isLeftChecked={isLeftChecked}
                                radioGroupName={'test'}
                                leftRadioLabel={'Left'}
                                rightRadioLabel={'Right'}
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

  it('should render with left option checked', () => {
    const wrapper = setup();
    expect(wrapper.find('#Left').props().checked).toBe(true);
  });

  it('should render with right option checked', () => {
    const wrapper = setup(false);
    expect(wrapper.find('#Right').props().checked).toBe(true);
  });
});

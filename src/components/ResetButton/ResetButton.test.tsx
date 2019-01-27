import {shallow} from 'enzyme';
import * as React from 'react';
import ResetButton from './ResetButton';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  return shallow(<ResetButton translations={translationsMock} />)
};

describe('ResetButton component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should reset all settings on click', () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    // @ts-ignore
    const spy = jest.spyOn(instance, 'resetSettings');

    wrapper.find('button').simulate('click');
    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

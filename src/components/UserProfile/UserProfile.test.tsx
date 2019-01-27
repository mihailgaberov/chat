import { shallow } from 'enzyme';
import * as React from 'react';
import { UserProfile } from './UserProfile';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  // @ts-ignore
  return shallow(<UserProfile translations={translationsMock} changeUsername={jest.fn()}/>)
};

describe('UserProfile component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render input field with username in it', () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    instance.setState({ username: 'guest0001' }, () => {
      expect(wrapper.find('input').props().value).toBe('guest0001');
    });
  });

  it('should be able to change user name', () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    // @ts-ignore
    const spy = jest.spyOn(instance, 'handleUserNameChange');

    wrapper.find('input').simulate('change', { currentTarget: { value: 'guest0001' } });
    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

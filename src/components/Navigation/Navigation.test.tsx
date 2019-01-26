import { shallow } from 'enzyme';
import * as React from 'react';
import { Navigation } from './Navigation';
import translationsMock from '../../translations/translations-mock';
import { NavLink } from 'react-router-dom';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  return shallow(<Navigation messages={[]} username={'guest0001'}
                             appContext={translationsMock} connectToSockets={jest.fn}/>)
};

describe('Navigation component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should have the right number navigation elements', () => {
    const wrapper = setup();
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('should render navigation links', () => {
    const wrapper = setup();
    expect(wrapper.find(NavLink).length).toEqual(2);
  })
});

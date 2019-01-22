import { shallow } from 'enzyme';
import * as React from 'react';
import ThemeSelector from './ThemeSelector';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  return shallow(<ThemeSelector translations={translationsMock} changeTheme={jest.fn()}/>)
};

describe('ThemeSelector component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

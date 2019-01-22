import { shallow } from 'enzyme';
import * as React from 'react';
import LanguageSelector from './LanguageSelector';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');


const setup = () => {
  return shallow(<LanguageSelector translations={translationsMock} changeLanguage={jest.fn()}/>)
};

describe('LanguageSelector component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

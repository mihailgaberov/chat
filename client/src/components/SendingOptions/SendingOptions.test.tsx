import {shallow} from 'enzyme';
import * as React from 'react';
import SendingOptions from './SendingOptions';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  return shallow(<SendingOptions translations={translationsMock}/>)
};

describe('SendingOptions component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

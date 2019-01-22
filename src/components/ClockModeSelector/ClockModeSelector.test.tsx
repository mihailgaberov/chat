import {shallow} from 'enzyme';
import * as React from 'react';
import ClockModeSelector from './ClockModeSelector';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  return shallow(<ClockModeSelector translations={translationsMock} />)
};

describe('ClockModeSelector component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

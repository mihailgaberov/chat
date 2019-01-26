import { shallow } from 'enzyme';
import * as React from 'react';
import { Navigation } from './Navigation';
import translationsMock from '../../translations/translations-mock';

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
});

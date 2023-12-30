import {shallow} from 'enzyme';
import * as React from 'react';
import SettingsPage from './SettingsPage';

const setup = () => {
  return shallow(<SettingsPage />)
};

describe('SettingsPage', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

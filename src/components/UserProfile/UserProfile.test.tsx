import {shallow} from 'enzyme';
import * as React from 'react';
import UserProfile from './UserProfile';

const translations = {
  lang: 'EN',
  nav: {
    chatTabLabel: 'Chat',
    settingsTabLabel: 'Settings'
  },
  userName: 'Test User'
};

const setup = () => {
  return shallow(<UserProfile translations={translations}/>)
};

describe('UserProfile component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UserProfile } from './UserProfile';
import translationsMock from '../../translations/translations-mock';

const setup = () => {
  return render(<UserProfile translations={translationsMock} changeUsername={() => {}}/>)
};

describe('UserProfile component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render input field with username in it', () => {
    const wrapper = setup();
    fireEvent.change(wrapper.getByRole('textbox'), { target: { value: 'guest0001' } });
    expect(wrapper.getByRole('textbox')).toHaveValue('guest0001');
  });
});

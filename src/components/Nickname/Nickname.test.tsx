import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as React from 'react';

import Nickname from './Nickname';

const setup = (username = '') => {
  return render(<Nickname value={username}/>)
};

describe('Nickname', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render user name if given', () => {
    setup('guest0001');
    expect(screen.getByText('guest0001')).toBeVisible();
  });
});

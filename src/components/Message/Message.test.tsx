import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Message from './Message';
import Nickname from '../Nickname';
import Timestamp from '../Timestamp';

const setup = (type = 'received') => {
  return render(<Message message={{from: 'guest0001', content: 'hi', time: '11:03', type}}/>)
};

describe('Message component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it('should render a message with nickname and time when receiving', () => {
    setup();
    
    expect(screen.getByText(/guest0001/i)).toBeVisible();
    expect(screen.getByText(/11:03/i)).toBeVisible();
    expect(screen.getByText(/hi/i)).toBeVisible();
  });

  it('should render a message with only time when sending', () => {
    setup('sent');
    expect(screen.getByText(/11:03/i)).toBeVisible();
    expect(screen.getByText(/hi/i)).toBeVisible();
  });
});
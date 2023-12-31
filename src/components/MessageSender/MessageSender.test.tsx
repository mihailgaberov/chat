import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MessageSender } from './MessageSender';

const setup = () => {
  return render(<MessageSender />)
};

describe('MessageSender', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should call sendChatMessage on click Send button', () => {
    setup();
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
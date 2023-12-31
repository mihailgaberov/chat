import * as React from 'react';
import ClockModeSelector from './ClockModeSelector';
import translationsMock from '../../translations/translations-mock';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';


describe('ClockModeSelector', () => {
  it('renders clock mode selector options', () => {
    render(<ClockModeSelector translations={translationsMock} />);
    expect(screen.getByText(/Clock Display/i)).toBeVisible()
    expect(screen.getByText(/12 Hours/i)).toBeVisible()
    expect(screen.getByText(/24 Hours/i)).toBeVisible();
  });
});

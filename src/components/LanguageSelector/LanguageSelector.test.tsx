import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LanguageSelector from './LanguageSelector';
import translationsMock from '../../translations/translations-mock';



const setup = () => {
  return render(<LanguageSelector translations={translationsMock} changeLanguage={() => {}}/>)
};


describe('LanguageSelector', () => {
    it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render with English option selected', () => {
    setup();
    expect(screen.getByText(/Language/i)).toBeVisible();
    expect(screen.getByText(/English/i)).toBeVisible();
    expect(screen.getByText(/Deutsch/i)).toBeVisible();
  });
});

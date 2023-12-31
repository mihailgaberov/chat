import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HashRouter } from 'react-router-dom';

import translationsMock from '../../translations/translations-mock';

import { Navigation } from './Navigation';

const setup = () => {
  return render(
    <HashRouter>
      <Navigation messages={[]} username={'guest0001'} appContext={translationsMock} connectToSockets={() => {}}/> 
      </HashRouter>
  );
};

describe('Navigation', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should have the right number navigation elements', () => {
    setup();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });

  it('should render navigation links', () => {
    setup();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(screen.getByText(/Chat/i)).toBeVisible();
    expect(screen.getByText(/Settings/i)).toBeVisible();
  });
});
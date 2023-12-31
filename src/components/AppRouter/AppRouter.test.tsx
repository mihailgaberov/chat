import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppRouter } from './AppRouter';
import * as React from 'react';

describe('AppRouter', () => {
  it('renders correctly nav links', async () => {
    render(<AppRouter />).to.be.in.document()
  });
});
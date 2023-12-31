import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Timestamp from './Timestamp';

const setup = (value = '') => {
  return render(<Timestamp value={value} floatToRight={true}/>)
};

describe('Timestamp', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should be able to render properly value passed as prop', () => {
    setup('11:22');
    expect(screen.getByText('11:22')).toBeVisible();
  });
});

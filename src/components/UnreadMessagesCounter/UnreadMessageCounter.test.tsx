import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import UnreadMessageCounter from './UnreadMessageCounter';

const setup = (count = 1) => {
  return render(<UnreadMessageCounter count={count}/>)
};

describe('UnreadMessageCounter', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render only when count > 0', () => {
    setup(12);
    expect(screen.getByText('12')).toBeVisible();
  });
});

import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import translationsMock from '../../translations/translations-mock';
import ResetButton from './ResetButton';


const setup = () => {
  return render(<ResetButton translations={translationsMock} />)
};

describe('ResetButton', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeSelector from './ThemeSelector';
import translationsMock from '../../translations/translations-mock';


const setup = () => {
  return render(<ThemeSelector translations={translationsMock} changeTheme={()=>{}}/>)
};

describe('ThemeSelector', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

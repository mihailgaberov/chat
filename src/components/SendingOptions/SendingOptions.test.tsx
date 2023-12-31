import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';


import SendingOptions from './SendingOptions';
import translationsMock from '../../translations/translations-mock';

const setup = () => {
  return render(<SendingOptions translations={translationsMock}/>)
};

describe('SendingOptions', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});

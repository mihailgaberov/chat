import * as React from 'react';
import RadioGroup from './RadioGroup';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';


const setup = () => {
  return render(<RadioGroup isLeftChecked={true}
                                radioGroupName={'test'}
                                leftRadioLabel={'Left'}
                                rightRadioLabel={'Right'}
                                leftRadioValue={'Light'}
                                rightRadioValue={'Dark'}
                                callback={() => {}}
                  />)
};


describe('RadioGroup', () => {
    it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

  it('should render with left option checked', () => {
    setup();
    expect(screen.getByText(/Left/i)).toBeVisible();
    expect(screen.getByText(/Right/i)).toBeVisible();
    expect(screen.getByLabelText(/Left/i)).toBeChecked();
    fireEvent.click(screen.getByText('Right'))
    expect(screen.getByLabelText(/Right/i)).toBeChecked();
  });
});

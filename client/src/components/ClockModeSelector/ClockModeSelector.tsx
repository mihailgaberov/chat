import * as React from 'react';
import RadioGroup from '../common/RadioGroup';
import StyledClockModeSelector from './StyledClockModeSelector';

import {IAppContext } from '../../utilities/TranslationsProvider';
import { readRecord, storeToLocalStorage } from '../../utilities/localStorageService';

const handleCallback = (val: string): void => storeToLocalStorage('clockMode', val);

const ClockModeSelector = ({translations}: {translations: IAppContext}) => (
  <StyledClockModeSelector>
    <label htmlFor='clockMode'>{translations.clockDisplay}</label>
    <RadioGroup isLeftChecked={readRecord('clockMode') !== '24'}
                radioGroupName={'clockMode'}
                leftRadioLabel={translations.clockModes.hours12}
                leftRadioValue={'12'}
                rightRadioLabel={translations.clockModes.hours24}
                rightRadioValue={'24'}
                callback={handleCallback} />
  </StyledClockModeSelector>
);

export default ClockModeSelector;
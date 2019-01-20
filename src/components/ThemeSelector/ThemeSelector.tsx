import * as React from 'react';
import RadioGroup from '../common/RadioGroup';
import StyledThemeSelector from './StyledThemeSelector';

import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';

const storeToLocalStorage = (val: string): void => storeToLocalStorageDebounced('theme', val);

const ThemeSelector: React.FunctionComponent = () => (
  <StyledThemeSelector>
    Interface color
  <RadioGroup isLeftChecked={readRecord('theme') === 'light'}
                radioGroupName={'themeSelector'}
                leftRadioLabel={'Light'}
                leftRadioValue={'light'}
                rightRadioLabel={'Dark'}
                rightRadioValue={'dark'}
                callback={storeToLocalStorage} />
  </StyledThemeSelector>
);

export default ThemeSelector;
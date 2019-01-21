import * as React from 'react';
import RadioGroup from '../common/RadioGroup';
import StyledThemeSelector from './StyledThemeSelector';

import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';
import { IAppContext } from '../../utilities/AppContext';

const storeToLocalStorage = (val: string): void => storeToLocalStorageDebounced('theme', val);

const ThemeSelector = ({ translations }: { translations: IAppContext }) => (
  <StyledThemeSelector>
    <label htmlFor='themeSelector'>{translations.interfaceColor}</label>
    <RadioGroup isLeftChecked={readRecord('theme') === 'Light'}
                radioGroupName={'themeSelector'}
                leftRadioLabel={translations.colors.color1}
                leftRadioValue={translations.colors.color1}
                rightRadioLabel={translations.colors.color2}
                rightRadioValue={translations.colors.color2}
                callback={storeToLocalStorage} />
  </StyledThemeSelector>
);

export default ThemeSelector;
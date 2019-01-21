import * as React from 'react';
import RadioGroup from '../common/RadioGroup';
import StyledThemeSelector from './StyledThemeSelector';

import { readRecord, storeToLocalStorage } from '../../utilities/localStorageService';
import { IAppContext } from '../../utilities/AppContext';

const handleCallback = (val: string): void => storeToLocalStorage('theme', val);

const ThemeSelector = ({ translations }: { translations: IAppContext }) => (
  <StyledThemeSelector>
    <label htmlFor='themeSelector'>{translations.interfaceColor}</label>
    <RadioGroup isLeftChecked={readRecord('theme') !== 'Dark'}
                radioGroupName={'themeSelector'}
                leftRadioLabel={translations.colors.color1}
                leftRadioValue={translations.colors.color1}
                rightRadioLabel={translations.colors.color2}
                rightRadioValue={translations.colors.color2}
                callback={handleCallback} />
  </StyledThemeSelector>
);

export default ThemeSelector;
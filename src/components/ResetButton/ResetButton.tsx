import * as React from 'react';
import StyledResetButton from './StyledResetButton';
import { clearAll } from '../../utilities/localStorageService';
import {IAppContext } from '../../utilities/TranslationsProvider';

const resetSettings = () => clearAll();

const ResetButton = ({translations}: {translations: IAppContext}) => (
  <StyledResetButton>
    <button onClick={resetSettings}>{translations.resetButtonLabel}</button>
  </StyledResetButton>
);

export default ResetButton;
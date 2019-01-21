import * as React from 'react';
import StyledResetButton from './StyledResetButton';
import { clearAll } from '../../utilities/localStorageService';

const resetSettings = () => clearAll();

const ResetButton: React.FunctionComponent = () => (
  <StyledResetButton><button onClick={resetSettings}>Reset button</button></StyledResetButton>
);

export default ResetButton;
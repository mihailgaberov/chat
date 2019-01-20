import * as React from 'react';
import ClockModeSelector from '../../ClockModeSelector';
import LanguageSelector from '../../LanguageSelector';
import ResetButton from '../../ResetButton';
import SendingOptions from '../../SendingOptions';
import ThemeSelector from '../../ThemeSelector';
import UserProfile from '../../UserProfile';

import { IAppContext, withAppContext } from '../../../utilities/AppContext';
import StyledPageContainer from '../StyledPageContainer';

const SettingsPage = ({ appContext }: { appContext: IAppContext }) => (
  <StyledPageContainer>
    <UserProfile translations={appContext}/>
    <ThemeSelector/>
    <ClockModeSelector/>
    <SendingOptions/>
    <LanguageSelector/>
    <ResetButton/>
  </StyledPageContainer>
);

export default withAppContext(SettingsPage);
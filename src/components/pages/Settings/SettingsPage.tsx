import * as React from 'react';
import ClockModeSelector from '../../ClockModeSelector';
import LanguageSelector from '../../LanguageSelector';
import ResetButton from '../../ResetButton';
import ThemeSelector from '../../ThemeSelector';
import SendingOptions from '../../SendingOptions';

import UserProfile from '../../UserProfile';
import StyledPageContainer from '../StyledPageContainer';

import { IAppContext, withAppContext } from '../../../utilities/AppContext';

const SettingsPage = ({ appContext }: { appContext: IAppContext }) => (
  <StyledPageContainer>
    <UserProfile translations={appContext}/>
    <ThemeSelector translations={appContext}/>
    <ClockModeSelector translations={appContext}/>
    <SendingOptions translations={appContext}/>
    <LanguageSelector/>
    <ResetButton/>
  </StyledPageContainer>
);

export default withAppContext(SettingsPage);
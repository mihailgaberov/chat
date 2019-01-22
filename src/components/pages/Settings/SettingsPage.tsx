import * as React from 'react';
import ClockModeSelector from '../../ClockModeSelector';
import LanguageSelector from '../../LanguageSelector';
import ResetButton from '../../ResetButton';
import ThemeSelector from '../../ThemeSelector';
import SendingOptions from '../../SendingOptions';
import UserProfile from '../../UserProfile';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';

const SettingsPage = ({ appContext, changeLanguage, changeTheme }:
                        { appContext: IAppContext, changeLanguage: () => void, changeTheme: () => void }) => (
  <StyledPageContainer>
    <UserProfile translations={appContext}/>
    <ThemeSelector translations={appContext} changeTheme={changeTheme}/>
    <ClockModeSelector translations={appContext}/>
    <SendingOptions translations={appContext}/>
    <LanguageSelector translations={appContext} changeLanguage={changeLanguage}/>
    <ResetButton translations={appContext}/>
  </StyledPageContainer>
);

export default withTranslations(SettingsPage as React.FunctionComponent);
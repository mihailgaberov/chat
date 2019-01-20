import * as React from 'react';
import ThemeSelector from '../../ThemeSelector';
import UserProfile from '../../UserProfile';

import {IAppContext, withAppContext} from '../../../utilities/AppContext';
import StyledPageContainer from '../StyledPageContainer';

const SettingsPage = ({appContext}: { appContext: IAppContext }) => (
  <StyledPageContainer>
    <h3>{appContext.nav.settingsTabLabel}</h3>
    <UserProfile/>
    <ThemeSelector/>
  </StyledPageContainer>
);

export default withAppContext(SettingsPage);
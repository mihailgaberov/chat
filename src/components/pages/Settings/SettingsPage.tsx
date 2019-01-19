import * as React from 'react';
import {IAppContext, withAppContext} from '../../../utilities/AppContext';
import StyledPageContainer from '../StyledPageContainer';

const SettingsPage = ({appContext}: { appContext: IAppContext }) => (
  <StyledPageContainer>
    <h3>{appContext.nav.settingsTabLabel}</h3>
  </StyledPageContainer>
);

export default withAppContext(SettingsPage);
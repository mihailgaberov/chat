import * as React from 'react';
import {IAppContext, withAppContext} from '../../../utilities/AppContext';
import StyledPageContainer from '../StyledPageContainer';

const ChatPage = ({appContext}: { appContext: IAppContext }) =>
  (
    <StyledPageContainer>
      <h3>{appContext.nav.chatTabLabel}</h3>
    </StyledPageContainer>
  );

export default withAppContext(ChatPage as React.FunctionComponent);
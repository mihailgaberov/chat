import * as React from 'react';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';
import StyledPageContainer from '../StyledPageContainer';

const ChatPage = ({appContext}: { appContext: IAppContext }) =>
  (
    <StyledPageContainer>
      <h3>{appContext.nav.chatTabLabel}</h3>
    </StyledPageContainer>
  );

export default withTranslations(ChatPage as React.FunctionComponent);
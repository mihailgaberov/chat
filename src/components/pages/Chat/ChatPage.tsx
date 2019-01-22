import * as React from 'react';
import ChatArea from '../../ChatArea/ChatArea';
import MessageSender from '../../MessageSender';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';

const ChatPage = ({appContext}: { appContext: IAppContext }) =>
  (
    <StyledPageContainer>
      <ChatArea />
      <MessageSender/>
    </StyledPageContainer>
  );

export default withTranslations(ChatPage as React.FunctionComponent);
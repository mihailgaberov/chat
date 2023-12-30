import * as React from 'react';
import ChatArea from '../../ChatArea';
import MessageSender from '../../MessageSender';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';

const ChatPage = () => (
  <StyledPageContainer>
    <ChatArea/>
    <MessageSender/>
  </StyledPageContainer>
);

export default withTranslations(ChatPage);

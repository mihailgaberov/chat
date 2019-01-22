import * as React from 'react';
import StyledChatArea from './StyledChatArea';
import Message from '../Message';

const ChatArea = () => (
  <StyledChatArea>
    Chat area
    <Message type={'sent'}/>
    <Message type={'received'}/>
  </StyledChatArea>
);

export default ChatArea;
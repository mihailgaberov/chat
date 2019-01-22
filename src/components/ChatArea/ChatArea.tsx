import * as React from 'react';
import StyledChatArea from './StyledChatArea';
import Message from '../Message';

const ChatArea = () => (
  <StyledChatArea>
    <Message type={'sent'} value={'Hi, asl pls?'}/>
    <Message type={'received'} value={'Hi, Doroteya. 21/f/sf'}/>
  </StyledChatArea>
);

export default ChatArea;
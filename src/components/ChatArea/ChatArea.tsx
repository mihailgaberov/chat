import * as React from 'react';
import StyledChatArea from './StyledChatArea';
import Message from '../Message';

const ChatArea = () => (
  <StyledChatArea>
    <Message type={'sent'} value={'Hi, asl pls?'}/>
    <Message type={'received'} value={'Hi, Doroteya. 21/f/sf'}/>
    <Message type={'sent'} value={'How are you?'}/>
    <Message type={'received'} value={'I am fine. Thank you! How are about you?'}/>
  </StyledChatArea>
);

export default ChatArea;
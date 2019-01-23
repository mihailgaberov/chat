import * as React from 'react';
import StyledChatArea from './StyledChatArea';
import Message from '../Message';
import Nickname from '../Nickname';

const ChatArea = () => (
  <StyledChatArea>
    <Nickname/>
    <Message type={'received'} value={'Want to bang tonight?'}/>
    <Nickname/>
    <Message type={'received'} value={'I meant hang.'}/>
    <Nickname/>
    <Message type={'received'} value={'Duck, auto-cucumber.'}/>
    <Message type={'sent'} value={'What?'}/>
    <Nickname/>
    <Message type={'received'} value={'God donut.'}/>
    <Nickname/>
    <Message type={'received'} value={'How the duck do I turn this off?'}/>
    <Message type={'sent'} value={':))))'}/>
      <Nickname/>
      <Message type={'received'} value={'Want to bang tonight?'}/>
      <Nickname/>
      <Message type={'received'} value={'I meant hang.'}/>
      <Nickname/>
      <Message type={'received'} value={'Duck, auto-cucumber.'}/>
      <Message type={'sent'} value={'What?'}/>
      <Nickname/>
      <Message type={'received'} value={'God donut.'}/>
      <Nickname/>
      <Message type={'received'} value={'How the duck do I turn this off?'}/>
      <Message type={'sent'} value={':))))'}/>
  </StyledChatArea>
);

export default ChatArea;
import * as React from 'react';
import StyledMessageSender from './StyledMessageSender';

const MessageSender = () => (
  <StyledMessageSender>
    <input type='text' />
    <button>Send</button>
  </StyledMessageSender>
);

export default MessageSender;
import * as React from 'react';
import StyledMessage from './StyledMessage';

const Message = ({type}: {type: string}) => (
  <StyledMessage>
    {type === 'sent' && 'Message sent'}
    {type === 'received' && 'Message received'}
  </StyledMessage>
);

export default Message;
import * as React from 'react';
import StyledMessage from './StyledMessage';

const Message = ({type, value}: {type: string, value: string}) => (
  <StyledMessage type={type}>
    {value}
  </StyledMessage>
);

export default Message;
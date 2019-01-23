import * as React from 'react';
import StyledMessage from './StyledMessage';
import Nickname from '../Nickname';

const Message = ({type, value}: {type: string, value: string}) => (
  <StyledMessage type={type}>
    <Nickname/>
    {value}
  </StyledMessage>
);

export default Message;
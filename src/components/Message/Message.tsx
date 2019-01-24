import * as React from 'react';
import StyledMessage from './StyledMessage';
import Nickname from '../Nickname';
import Timestamp from '../Timestamp';

const Message = ({message}: {message: { from: string, content: string, time: string, type: string}}) => (
  <React.Fragment>
      <div id='nickname-container'>
          <Nickname value={message.from} shouldRender={message.type === 'received'}/>
          <Timestamp value={message.time} floatToRight={message.type === 'sent'}/>
      </div>
      <StyledMessage type={message.type}>
          {message.content}
      </StyledMessage>
  </React.Fragment>

);

export default Message;
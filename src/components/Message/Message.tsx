import * as React from 'react';
import StyledMessage from './StyledMessage';
import Nickname from '../Nickname';
import Timestamp from '../Timestamp';

export interface IMessage {
  from: string;
  content: string;
  time: string;
  type: string;
}

const Message = ({message}: {message: IMessage}) => (
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
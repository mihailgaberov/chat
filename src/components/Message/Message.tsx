import * as React from 'react';
import Emojify from 'react-emojione';
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
        {message.type === 'received' && <Nickname value={message.from} />}
          <Timestamp value={message.time} floatToRight={message.type === 'sent'}/>
      </div>
      <StyledMessage type={message.type}>
        <Emojify>{message.content}</Emojify>
      </StyledMessage>
  </React.Fragment>

);

export default Message;
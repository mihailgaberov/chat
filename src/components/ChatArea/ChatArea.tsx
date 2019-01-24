import * as React from 'react';
import { connect } from 'react-redux';
import StyledChatArea from './StyledChatArea';
import Message from '../Message';

interface IChatAreaStare {
  messageState: {
    messages: []
  }
}

class ChatArea extends React.Component {
  public render() {
    // @ts-ignore
    const { messages } = this.props;

    console.log('>>> messages: ', messages);

    return (
      <StyledChatArea>
        {messages.map((element: { from: string, content: string, time: string, type: string}, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <Message message={element}/>
            </React.Fragment>
          )
        })}
      </StyledChatArea>
    );
  }
}

const mapStateToProps = (state: IChatAreaStare) => ({
  messages: state.messageState.messages
});

export default connect(mapStateToProps)(ChatArea);
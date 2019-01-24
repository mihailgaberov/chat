import * as React from 'react';
import { connect } from 'react-redux';
import StyledChatArea from './StyledChatArea';
import Message from '../Message';
import Nickname from '../Nickname';
import Timestamp from '../Timestamp';

interface IChatAreaStare {
  messageState: {
    messages: []
  }
}

class ChatArea extends React.Component {
  public render() {
    // @ts-ignore
    const { messages } = this.props;
    /*const { messages } = {messages: [{from: 'Mihail', content: 'Hoi', time: '11:32'},
        {from: 'Mihail', content: 'Do you want to bang tonight?', time: '11:34'}]};*/
    console.log('>>> messages: ', messages);

    return (
      <StyledChatArea>
        {messages.map((element: { from: string, content: string, time: string}, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <div id='nickname-container'>
                <Nickname value={element.from}/>
                <Timestamp value={element.time}/>
              </div>
              <Message type={'received'} value={element.content}/>
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
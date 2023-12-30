import * as React from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';

import StyledChatArea from './StyledChatArea';
import Message from '../Message';
import { scrollToBottom } from '../../utilities/common';
import { IMessage } from '../Message/Message';
import store from 'src/store';
import { messageReceived } from 'src/store/message/actions';

interface IChatAreaState {
  messageState: {
    messages: []
  }
}

interface IChatAreaProps {
    messages: []
}

const API_KEY = process.env.REACT_APP_API_KEY || '';

export class ChatArea extends React.Component {
  private chatAreaRef = React.createRef<HTMLDivElement>();
  

  componentDidMount(): void {
    const pusher = new Pusher(API_KEY, {
      cluster: 'eu',
      forceTLS: true
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      store.dispatch(messageReceived(data));
    });
  }

  public render() {
    const { messages } = this.props as IChatAreaProps;

    return (
      <StyledChatArea ref={this.chatAreaRef}>
          {messages.map((element: IMessage, idx: number) => {
            return (
              <React.Fragment key={idx}>
                <Message message={element}/>
              </React.Fragment>
            )
          })}
      </StyledChatArea>
    );
  }

  public componentDidUpdate(): void {
    const chatAreaElement: Element = this.chatAreaRef.current as Element;
    const shouldScroll: boolean = chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;

    if (shouldScroll) {
      scrollToBottom(chatAreaElement);
    }
  }
}

const mapStateToProps = (state: IChatAreaState) => ({
  messages: state.messageState.messages
});

export default connect(mapStateToProps)(ChatArea);
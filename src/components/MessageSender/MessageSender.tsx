import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/message/actions';
import StyledMessageSender from './StyledMessageSender';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { readRecord } from '../../utilities/localStorageService';

interface IMessageSenderDispatchProps {
  sendMessage: (message: {from: string, content: string}) => void;
}

export class MessageSender extends React.Component {
  public state = {
    username: readRecord('username') || 'guest0001',
    chatMessage: ''
  };

  public render() {
    const { chatMessage } = this.state;

    return (
      <StyledMessageSender>
        <input type='text' id='input-chat-message' value={chatMessage} onChange={this.handleOnChange}/>
        <button onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x"/>
        </button>
      </StyledMessageSender>
    );
  }

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ chatMessage: e.currentTarget.value });
  };

  private handleClick = () => {
    const { username, chatMessage } = this.state;
    // @ts-ignore
    this.props.sendMessage({ from: username, content: chatMessage });
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IMessageSenderDispatchProps => ({
  sendMessage: (message: { from: string, content: string}) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(MessageSender);
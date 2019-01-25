import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/message/actions';
import StyledMessageSender from './StyledMessageSender';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { readRecord } from '../../utilities/localStorageService';
import { getTime12Hours, getTime24hours } from '../../utilities/common';

interface IMessageSenderDispatchProps {
  sendMessage: (message: { from: string, content: string, time: string }) => void;
}

export class MessageSender extends React.Component {
  public state = {
    username: readRecord('username') || 'guest0001',
    chatMessage: ''
  };

  private messagesInputRef = React.createRef<HTMLInputElement>();

  public render() {
    const { chatMessage } = this.state;

    return (
      <StyledMessageSender>
        <input type='text' ref={this.messagesInputRef} value={chatMessage} onChange={this.handleOnChange}/>
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
    if (chatMessage !== '') {
      // @ts-ignore
      this.props.sendMessage({ from: username, content: chatMessage, time: this.getTime() });

      // Clear the input field and put the focus back to it to be ready for the next message
      this.setState({ chatMessage: '' });
      (this.messagesInputRef.current as HTMLInputElement).focus();
    }
  };

  private getTime = (): string => {
    return readRecord('clockMode') === '12' ? getTime12Hours() : getTime24hours();
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IMessageSenderDispatchProps => ({
  sendMessage: (message: { from: string, content: string, time: string }) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(MessageSender);
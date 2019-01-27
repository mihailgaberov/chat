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
  private pressedKeysMap: {} = {};

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  public render() {
    const { chatMessage } = this.state;

    return (
      <StyledMessageSender>
        <input id='send-message-input' type='text' ref={this.messagesInputRef} value={chatMessage}
               onChange={this.handleOnChange}/>
        <button id='send-message-btn' onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x"/>
        </button>
      </StyledMessageSender>
    );
  }

  private handleKeyUp = () => {
    this.pressedKeysMap = {};
  };

  private handleKeyPress = (e: KeyboardEvent) => {
    if (readRecord('ctrlEnterSending') !== 'On') {
      return;
    }
    e = e || event;
    this.pressedKeysMap[e.key] = e.type === 'keydown';

    if ('Control' in this.pressedKeysMap && 'Enter' in this.pressedKeysMap) {
      this.sendChatMessage();
      this.cleanMessageInput();
    }
  };

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ chatMessage: e.currentTarget.value });
  };

  private handleClick = () => {
    this.sendChatMessage();
    this.cleanMessageInput();
  };

  private sendChatMessage = (): void => {
    const { username, chatMessage } = this.state;
    if (chatMessage !== '') {
      // @ts-ignore
      this.props.sendMessage({ from: username, content: chatMessage, time: this.getTime() });
    }
  };

  private cleanMessageInput = (): void => {
    this.setState({ chatMessage: '' });
    if ((this.messagesInputRef.current as HTMLInputElement)) {
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
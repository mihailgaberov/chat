import * as React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/message/actions';
import StyledMessageSender from './StyledMessageSender';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class MessageSender extends React.Component {
  public state = {
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

  private handleClick =() => {
    console.log('>>> click');
    sendMessage({from: 'Mihail', content: this.state.chatMessage})
  };
}


const mapDispatchToProps = (dispatch: any) => ({
  sendMessage: (message: {from: string, content: string}) => dispatch(sendMessage(message))
});

export default connect(null, mapDispatchToProps)(MessageSender);
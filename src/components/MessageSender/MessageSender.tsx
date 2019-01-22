import * as React from 'react';
import StyledMessageSender from './StyledMessageSender';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const MessageSender = () => (
  <StyledMessageSender>
    <input type='text' />
    <button>
      <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x"/>
    </button>
  </StyledMessageSender>
);

export default MessageSender;
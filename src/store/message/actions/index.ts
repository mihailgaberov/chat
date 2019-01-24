export const MESSAGE_RECEIVED = 'message/message-received';
export const MESSAGE_SENT = 'message/message-sent';
export const SEND_MESSAGE = 'message/send-message';

export const messageReceived = (message: {from: string, content: string}) => {
  return {
    type: MESSAGE_RECEIVED,
    message
  };
};

export const sendMessage = (message: {from: string, content: string}) => {
  return {
    type: SEND_MESSAGE,
    message
  };
};

export const messageSent = () => {
  return {
    type: MESSAGE_SENT
  };
};
import { SEND_MESSAGE_RESPONSE, MESSAGE_SENT } from '../actions';

const INITIAL_STATE = {
  messages: []
};

function messageReducer(state = INITIAL_STATE, action: {type: string, message: { from: string, content: string}}) {
  switch (action.type) {
    case SEND_MESSAGE_RESPONSE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case MESSAGE_SENT:
    default:
      return state;
  }
}

export default messageReducer;
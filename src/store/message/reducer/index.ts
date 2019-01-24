import { SEND_MESSAGE_RESPONSE, MESSAGE_SENT } from '../actions';

const INITIAL_STATE = {
  messages: []
};

// Message Reducer
function messageReducer(state = INITIAL_STATE, action: {type: string, message: { from: string, content: string}}) {
  let reduced;
  switch (action.type) {
    case SEND_MESSAGE_RESPONSE:
      console.log('>>> message received reducer: ', action);
      reduced = {
        ...state,
        messages: [...state.messages, action.message]
      };
      break;
    case MESSAGE_SENT:
      reduced = Object.assign({},
        state, {outgoingMessage: ''}
      );
      break;
    default:
      reduced = state;
  }
  return reduced;
}

export default messageReducer;
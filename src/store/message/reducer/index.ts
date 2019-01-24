import { MESSAGE_RECEIVED, MESSAGE_SENT } from '../actions';

const INITIAL_STATE = {
  messages: [
    {
      from: '',
      content: ''
    }
  ]
};

// Message Reducer
function messageReducer(state = INITIAL_STATE, action: {type: string, message: { from: string, content: string}}) {
  let reduced;
  switch (action.type) {
    case MESSAGE_RECEIVED:
      reduced = Object.assign(state, {messages: state.messages.push(action.message)} );
      /*reduced = {
        ...state,
        messages: [...state.messages, action.message]
      };*/
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
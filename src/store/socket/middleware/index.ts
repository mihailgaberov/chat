import Socket from "./Socket";
import { CONNECT_SOCKET, connectionChanged } from "../actions";
import { messageReceived, messageSent, SEND_MESSAGE } from "../../message/actions";

const socketMiddleware = (store: any) => {

  // The socket's connection state changed
  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChanged(isConnected));
  };

  // The client has received a message
  const onIncomingMessage = (message: {from: string, content: string}) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  // Return the handler that will be called for each action dispatched
  return (next: any) => (action: any) => {
    const messageState = store.getState().messageState;
    const socketState = store.getState().socketState;

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messageState.user, socketState.port);
        break;

      case SEND_MESSAGE:
        socket.sendMessage({ 'from': messageState.user, 'content': action.message });
        store.dispatch(messageSent());
        break;

      default:
        break;
    }

    return next(action)
  };
};

export default socketMiddleware;
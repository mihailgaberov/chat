import Socket from "./Socket";
import { CONNECT_SOCKET, connectionChanged } from "../actions";
import { messageReceived, messageSent, SEND_MESSAGE_REQUEST } from "../../message/actions";

const socketMiddleware = (store: any) => {

  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChanged(isConnected));
  };

  const onIncomingMessage = (message: { from: string, content: string, time: string }) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next: any) => (action: any) => {
    const messageState = store.getState().messageState;
    const socketState = store.getState().socketState;

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messageState.user, process.env.PORT || socketState.port);
        break;

      case SEND_MESSAGE_REQUEST:
        socket.sendMessage(action.message);
        store.dispatch(messageSent());
        break;

      default:
        break;
    }

    return next(action)
  };
};

export default socketMiddleware;
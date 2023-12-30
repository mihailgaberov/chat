import axios from "axios";
import { messageSent, SEND_MESSAGE_REQUEST } from "../../message/actions";

const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT || '';

const middleware = (store: any) => {
  return (next: any) => async (action: any) => {

    if (action.type === SEND_MESSAGE_REQUEST) {
      try {
        await axios.post(SERVER_ENDPOINT, action.message);
        store.dispatch(messageSent());
      } catch (error) {
        console.error(`An error occurred while posting the message: ${error}`);
      }
    }

    return next(action)
  };
};

export default middleware;
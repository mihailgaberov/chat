import { createStore, combineReducers, applyMiddleware } from 'redux';
import socketReducer from './socket/reducer';
import messageReducer from './message/reducer';
import socketMiddleware from './socket/middleware';

const rootReducer = combineReducers({
  socketState: socketReducer,
  messageState: messageReducer
});

const index = createStore(
  rootReducer,
  applyMiddleware(socketMiddleware));

export default index;
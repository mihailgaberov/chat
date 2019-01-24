import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import socketReducer from './socket/reducer';
import messageReducer from './message/reducer';
import socketMiddleware from './socket/middleware';

const rootReducer = combineReducers({
  socketState: socketReducer,
  messageState: messageReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const index = {
  ...createStore(rootReducer, composeEnhancers(applyMiddleware(socketMiddleware)))
};

export default index;
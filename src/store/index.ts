import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import messageReducer from './message/reducer';
import middleware from './middleware/middleware';

const rootReducer = combineReducers({
  messageState: messageReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const index = {
  ...createStore(rootReducer, composeEnhancers(applyMiddleware(middleware)))
};

export default index;
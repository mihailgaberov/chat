import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Cannot find root container');
}

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

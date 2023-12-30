import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Provider store={store}>
    <App />
</Provider>);

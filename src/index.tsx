import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Pusher from 'pusher-js';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('b0df7f6ae0d889e0b55f', {
    cluster: 'eu'
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    alert(JSON.stringify(data));
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Provider store={store}>
    <App />
</Provider>);

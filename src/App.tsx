import * as React from 'react';
import Pusher from 'pusher-js';

import AppRouter from './components/AppRouter';
import TranslationProvider from './utilities/TranslationsProvider'


class App extends React.Component {

  componentDidMount() {
    
    const pusher = new Pusher('ec18a5c19f19478cc5c9', {
      cluster: 'eu',
      forceTLS: true
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      console.log('>>> message: ', data)
    });
  }



  public render() {
    return (
      <TranslationProvider>
        <AppRouter />
      </TranslationProvider>
    )
  }
}

export default App;

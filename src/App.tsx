import * as React from 'react';
import AppRouter from './components/AppRouter';
import TranslationProvider from './utilities/TranslationsProvider'

class App extends React.Component {
  public render() {
    return (
      <TranslationProvider>
        <AppRouter/>
      </TranslationProvider>
    )
  }
}

export default App;

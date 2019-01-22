import * as React from 'react';
import AppRouter from './components/AppRouter';
import { theme, ThemeProvider } from "./theme";
import TranslationProvider from './utilities/TranslationsProvider'

class App extends React.Component {
  public render() {
    return <ThemeProvider theme={theme}>
      <TranslationProvider>
        <AppRouter/>
      </TranslationProvider >
    </ThemeProvider>
  }
}

export default App;

import * as React from 'react';
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';

import AppRouter from './components/AppRouter';

import {theme, ThemeProvider} from "./theme";
import {AppContextProvider} from './utilities/AppContext';

class App extends React.Component {
  public lang = 'EN';
  public translations = this.lang && this.lang === 'DE' ? translationsDE : translationsEN;

  public state = {
    appTranslations: {
      lang: this.translations.lang,
      nav: {
        chatTabLabel: this.translations.nav.chatTabLabel,
        settingsTabLabel: this.translations.nav.settingsTabLabel
      },
    }
  };

  public render() {
    return <ThemeProvider theme={theme}>
      <AppContextProvider value={this.state.appTranslations}>
        <AppRouter/>
      </AppContextProvider>
    </ThemeProvider>
  }
}

export default App;

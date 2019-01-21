import * as React from 'react';
import * as translationsDE from './translations/translations-de.json';
import * as translationsEN from './translations/translations-en.json';

import AppRouter from './components/AppRouter';

import { theme, ThemeProvider } from "./theme";
import { AppContextProvider, IAppContext } from './utilities/AppContext';

class App extends React.Component {
  public lang = 'EN';
  public translations: IAppContext = this.lang && this.lang === 'DE' ? translationsDE : translationsEN;

  public state = {
    appTranslations: {
      colors: this.translations.colors,
      ctrlEnterOptionsTitle: this.translations.ctrlEnterOptionsTitle,
      ctrlEnterSendingOptions: this.translations.ctrlEnterSendingOptions,
      clockDisplay: this.translations.clockDisplay,
      clockModes: this.translations.clockModes,
      interfaceColor: this.translations.interfaceColor,
      langLabel: this.translations.langLabel,
      langCode: this.translations.langCode,
      languageEN: this.translations.languageEN,
      languageDE: this.translations.languageDE,
      nav: {
        chatTabLabel: this.translations.nav.chatTabLabel,
        settingsTabLabel: this.translations.nav.settingsTabLabel
      },
      userName: this.translations.userName,
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

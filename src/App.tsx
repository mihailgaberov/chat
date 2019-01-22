import * as React from 'react';

import AppRouter from './components/AppRouter';

import { theme, ThemeProvider } from "./theme";
import TranslationProvider from './utilities/TranslationsProvider'

class App extends React.Component {
/*
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
      resetButtonLabel: this.translations.resetButtonLabel,
      userName: this.translations.userName,
    }
  };
*/

  public render() {
    return <ThemeProvider theme={theme}>
      <TranslationProvider>
        <AppRouter/>
      </TranslationProvider >
    </ThemeProvider>
  }
}

export default App;

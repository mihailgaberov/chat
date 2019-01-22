import * as React from 'react';
import * as translationsDE from '../translations/translations-de.json';
import * as translationsEN from '../translations/translations-en.json';

export interface IAppContext {
  clockDisplay: string;
  clockModes: {
    hours12: string;
    hours24: string;
  },
  colors: {
    color1: string;
    color2: string;
  };
  interfaceColor: string;
  langCode: string;
  langLabel: string;
  languageEN: string;
  languageDE: string;
  nav: {
    chatTabLabel: string,
    settingsTabLabel: string
  };
  resetButtonLabel: string;
  userName: string;
  ctrlEnterOptionsTitle: string;
  ctrlEnterSendingOptions: {
    option1: string;
    option2: string;
  }
  changeLanguage: () => void;
}

const context = React.createContext<IAppContext | any>(null);

const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

export default class TranslationProvider extends React.Component {
  public state = {
    translations: translationsEN
  };

  public render() {
    return (
      <AppContextProvider value={{
        state: this.state,
        changeLanguage: this.changeLanguage
      }}>
        {this.props.children}
      </AppContextProvider>
    )
  }

  private changeLanguage = () => {
    console.log('>>> change lang called');
    this.setState({
      translations: this.state.translations.langCode === 'DE' ? translationsEN : translationsDE
    });
  }
}
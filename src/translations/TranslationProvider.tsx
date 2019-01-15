import * as React from 'react';
import translationsDE from './translations-de';
import translationsEN from './translations-en';

interface ITranslationProvider {
    translations: {}
}

// @ts-ignore
const TranslationContext: any = React.createContext();

const { Provider, Consumer } = TranslationContext;
export { Consumer }

export default class TranslationProvider extends React.Component<{}, ITranslationProvider> {
    state = {
        translations:  translationsEN
    };

    render() {
        return (
            <Provider value={{
                state: this.state,
                changeLang: () => this.setState({
                    translations: this.state.translations.lang === 'DE' ? translationsEN : translationsDE
                })
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

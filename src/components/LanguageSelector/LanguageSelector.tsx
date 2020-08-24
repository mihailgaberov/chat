import * as React from 'react';
import StyledLanguageSelector from './StyledLanguageSelector';
import { readRecord, storeToLocalStorage } from '../../utilities/localStorageService';
import { IAppContext } from '../../utilities/TranslationsProvider';

class LanguageSelector extends React.Component<{ translations: IAppContext, changeLanguage: () => void }> {


    public render() {
        const {translations} = this.props;
        return (
            <StyledLanguageSelector>
                <label htmlFor='language'>{translations.langLabel}</label>
                <select id='language' onChange={this.handleLanguageChange} defaultValue={readRecord('lang') || 'en'}>
                    <option value='en'>{translations.languageEN}</option>
                    <option value='de'>{translations.languageDE}</option>
                </select>
            </StyledLanguageSelector>
        );
    }

    private handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.changeLanguage();
        storeToLocalStorage('lang', e.currentTarget.value);
    };
}

export default LanguageSelector;

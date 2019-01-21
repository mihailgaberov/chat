import * as React from 'react';
import StyledLanguageSelector from './StyledLanguageSelector';
import { readRecord, storeToLocalStorage } from '../../utilities/localStorageService';
import { IAppContext } from '../../utilities/AppContext';


const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  storeToLocalStorage('lang', e.currentTarget.value);
};

const LanguageSelector = ({translations}: {translations: IAppContext}) => (
  <StyledLanguageSelector>
    <label htmlFor='language'>{translations.langLabel}</label>
    <select id='language' onChange={handleLanguageChange} defaultValue={readRecord('lang') || 'en'}>
      <option value='en'>{translations.languageEN}</option>
      <option value='de'>{translations.languageDE}</option>
    </select>

  </StyledLanguageSelector>
);

export default LanguageSelector;
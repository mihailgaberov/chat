import * as React from 'react';
import StyledSendingOptions from './StyledSendingOptions';
import RadioGroup from '../common/RadioGroup';
import { IAppContext } from '../../utilities/AppContext';
import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';

const storeToLocalStorage = (val: string): void => storeToLocalStorageDebounced('ctrlEnterSending', val);

const SendingOptions = ({translations}: {translations: IAppContext}) => (
  <StyledSendingOptions>
    <label htmlFor='ctrlEnterOptionsTitle'>{translations.ctrlEnterOptionsTitle}</label>
    <RadioGroup isLeftChecked={readRecord('ctrlEnterSending') === 'On'}
                radioGroupName={'ctrlEnterOptions'}
                leftRadioLabel={translations.ctrlEnterSendingOptions.option1}
                leftRadioValue={translations.ctrlEnterSendingOptions.option1}
                rightRadioLabel={translations.ctrlEnterSendingOptions.option2}
                rightRadioValue={translations.ctrlEnterSendingOptions.option2}
                callback={storeToLocalStorage} />
  </StyledSendingOptions>
);

export default SendingOptions;
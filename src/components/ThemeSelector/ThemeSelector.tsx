import * as React from 'react';
import RadioGroup from '../common/RadioGroup';
import StyledThemeSelector from './StyledThemeSelector';
import { readRecord, storeToLocalStorage } from '../../utilities/localStorageService';
import {IAppContext } from '../../utilities/TranslationsProvider';

class ThemeSelector extends React.Component<{ translations: IAppContext, changeTheme: () => void}> {
  public render() {
    const { translations } = this.props;
    return (
      <StyledThemeSelector>
        <label htmlFor='themeSelector'>{translations.interfaceColor}</label>
        <RadioGroup isLeftChecked={readRecord('theme') !== 'dark'}
                    radioGroupName={'themeSelector'}
                    leftRadioLabel={translations.colors.color1}
                    leftRadioValue={'light'}
                    rightRadioLabel={translations.colors.color2}
                    rightRadioValue={'dark'}
                    callback={this.handleCallback}/>
      </StyledThemeSelector>
    );
  }

  private handleCallback = (val: string): void => {
    storeToLocalStorage('theme', val);
    this.props.changeTheme();
  };
}

export default ThemeSelector;
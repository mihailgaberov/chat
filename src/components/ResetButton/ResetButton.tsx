import * as React from 'react';
import StyledResetButton from './StyledResetButton';
import { clearAll } from '../../utilities/localStorageService';
import {IAppContext } from '../../utilities/TranslationsProvider';


class ResetButton extends React.Component<{ translations: IAppContext }> {
  public render() {
    const { translations } = this.props;
    return (
      <StyledResetButton>
        <button onClick={this.resetSettings}>{translations.resetButtonLabel}</button>
      </StyledResetButton>
    );
  }

  private resetSettings = () => clearAll();
}

export default ResetButton;
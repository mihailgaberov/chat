import * as React from 'react';
import { AppContextConsumer } from './TranslationsProvider';


export const withTranslations = (WrappedComponent: React.ComponentClass | React.FunctionComponent) => {
  class BoundComponentHOC extends React.Component {
    public render() {
      return <AppContextConsumer>
        {value => <WrappedComponent
          {...this.props as any}
          appContext={value.state.translations}
          changeLanguage={value.changeLanguage}
          changeTheme={value.changeTheme}
        />}
      </AppContextConsumer>;
    }
  }

  return BoundComponentHOC;
};
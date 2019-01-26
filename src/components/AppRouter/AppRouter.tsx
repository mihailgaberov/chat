import * as React from 'react';
import { HashRouter, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ChatPage from '../pages/Chat/ChatPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import { ComponentType } from 'react';

// Fix React Router active class setting for redux connected components
const BlockedNavigation = withRouter(Navigation as ComponentType<RouteComponentProps>);

export const AppRouter: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <BlockedNavigation />
        <Switch>
          <Route exact={true} path='/' component={ChatPage} />
          <Route path='/chat' component={ChatPage} />
          <Route path='/settings' component={SettingsPage} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
};

export default AppRouter;
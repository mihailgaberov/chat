import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ChatPage from '../pages/Chat/ChatPage';
import SettingsPage from '../pages/Settings/SettingsPage';

const AppRouter: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <Navigation />
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
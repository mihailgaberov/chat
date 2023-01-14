import * as React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ChatPage from '../pages/Chat/ChatPage';
import SettingsPage from '../pages/Settings/SettingsPage';

export const AppRouter: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <Navigation />
        <Routes>
          <Route path='/' element={<ChatPage />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </React.Fragment>
    </HashRouter>
  );
};

export default AppRouter;

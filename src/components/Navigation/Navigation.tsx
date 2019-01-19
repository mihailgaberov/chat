import * as React from 'react';
import StyledNavigation from './StyledNavigation';

import {NavLink} from 'react-router-dom';
import {IAppContext, withAppContext} from '../../utilities/AppContext';

const Navigation = ({ appContext}: {appContext: IAppContext} ) =>
  appContext && (
    <StyledNavigation>
      <li>
        <NavLink exact={true} activeClassName='active' to='/chat'>Chat</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/settings'>Settings</NavLink>
      </li>
    </StyledNavigation>
  );

export default withAppContext(Navigation);
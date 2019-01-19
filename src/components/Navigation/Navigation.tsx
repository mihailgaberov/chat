import * as React from 'react';
import StyledNavigation from './StyledNavigation';

import {faCog, faComment} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {IAppContext, withAppContext} from '../../utilities/AppContext';

const Navigation = ({ appContext}: {appContext: IAppContext} ) =>
  appContext && (
    <StyledNavigation>
      <li>
          <NavLink exact={true} activeClassName='active' to='/chat'>
            <FontAwesomeIcon icon={faComment}  color="white" size="lg" />
            <span>Chat</span>
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/settings'>
          <FontAwesomeIcon icon={faCog} color="white" size="lg"  />
          <span>Settings</span>
        </NavLink>
      </li>
    </StyledNavigation>
  );

export default withAppContext(Navigation);
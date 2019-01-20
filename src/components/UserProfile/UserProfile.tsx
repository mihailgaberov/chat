import * as React from 'react';
import StyledUserProfile from './StyledUserProfile';

import {IAppContext, withAppContext} from '../../utilities/AppContext';

const UserProfile = ({appContext}: { appContext: IAppContext }) => (
  <StyledUserProfile>{appContext.userName}</StyledUserProfile>
);

export default withAppContext(UserProfile);
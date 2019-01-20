import * as React from 'react';
import StyledUserProfile from './StyledUserProfile';

import { IAppContext } from '../../utilities/AppContext';
import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';

interface IUserProfileState {
  username: string;
}

class UserProfile extends React.Component<{ translations: IAppContext }> {
  public state: IUserProfileState = {
    username: readRecord('username') || 'guest0001'
  };

  public render() {
    const { translations } = this.props;
    const { username } = this.state;

    return (
      <StyledUserProfile>
        <label htmlFor='username'>{translations.userName}</label>
        <input type='text' name='username' value={username} onChange={this.handleUserNameChange}/>
      </StyledUserProfile>
    );
  }

  private handleUserNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
    storeToLocalStorageDebounced('username', e.currentTarget.value);
  };

}

export default UserProfile;
import * as React from 'react';
import StyledUserProfile from './StyledUserProfile';

import { debounce } from 'lodash';
import { IAppContext } from '../../utilities/AppContext';
import { createRecord, isLocalStorageSupported, readRecord, updateRecord } from '../../utilities/localStorageService';

interface IUserProfileState {
  username: string;
}

class UserProfile extends React.Component<{ translations: IAppContext }> {
  public state: IUserProfileState = {
    username: readRecord('username') || 'guest0001'
  };


  private storeToLocalStorage = debounce((username: string): void => {
    if (isLocalStorageSupported()) {
      if (readRecord('username')) {
        updateRecord('username', username);
      } else {
        createRecord('username', username);
      }
    }
  }, 1500, {leading: false});

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
    this.storeToLocalStorage(e.currentTarget.value);
  };

}

export default UserProfile;
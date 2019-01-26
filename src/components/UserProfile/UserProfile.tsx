import * as React from 'react';
import { connect } from 'react-redux';
import StyledUserProfile from './StyledUserProfile';
import {IAppContext } from '../../utilities/TranslationsProvider';
import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';
import { Dispatch } from 'redux';
import { changeUsername } from '../../store/message/actions';

interface IUserProfileState {
  username: string;
}

export class UserProfile extends React.Component<{ translations: IAppContext }> {
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
    // @ts-ignore
    this.props.changeUsername(e.currentTarget.value);
  };

}

// Map dispatch function into props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  changeUsername: (username: string) => dispatch(changeUsername(username))
});

export default connect(null, mapDispatchToProps)(UserProfile);
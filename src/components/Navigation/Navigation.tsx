import * as React from 'react';
import StyledNavigation from './StyledNavigation';

import {faCog, faComment} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {withAppContext} from '../../utilities/AppContext';
import UnreadMessagesCounter from '../UnreadMessagesCounter/UnreadMessageCounter';

interface INavProps {
  appContext: {};
}

interface INavState {
  shouldBlink: boolean;
}

class Navigation extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      shouldBlink: false
    };
  }

  public componentDidMount(): void {
    // TODO: Temporary here for testing -> tab will startBlinking when new message is received
    // setTimeout(this.startBlinking, 2000);
  }

  public render() {
    const {appContext} = this.props;
    const { shouldBlink } = this.state;

    return appContext && (
      <StyledNavigation>
        <li>
          <NavLink exact={true} activeClassName='active' className={shouldBlink ? 'blinking' : 'no-blinking'}
                   to='/chat'>
            <FontAwesomeIcon icon={faComment} color="white" size="lg"/>
            <UnreadMessagesCounter count={10}/>
            <span>Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/settings'>
            <FontAwesomeIcon icon={faCog} color="white" size="lg"/>
            <span>Settings</span>
          </NavLink>
        </li>
      </StyledNavigation>
    );
  }

  /*private startBlinking = (): void => {
    this.setState({
      shouldBlink: true
    });
  };*/

  /*private stopBlinking = (): void => {
    this.setState({
      shouldBlink: false
    });
  };*/
}

export default withAppContext(Navigation as React.ComponentClass);
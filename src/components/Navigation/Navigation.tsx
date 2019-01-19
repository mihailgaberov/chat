import * as React from 'react';
import StyledNavigation from './StyledNavigation';

import {faCog, faComment} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {withAppContext} from '../../utilities/AppContext';

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
    // TODO: Temporary for testing -> tab will blink when new message is received
    setTimeout(this.blink, 2000);
  }

  public render() {
    const {appContext} = this.props;
    const { shouldBlink } = this.state;

    return appContext && (
      <StyledNavigation>
        <li>
          <NavLink exact={true} activeClassName='active' className={shouldBlink ? 'blink' : 'no-blink'}
                   to='/chat'>
            <FontAwesomeIcon icon={faComment} color="white" size="lg"/>
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

  private blink = (): void => {
    this.setState({
      shouldBlink: true
    });

    setTimeout(() => {
      this.setState({
        shouldBlink: false
      });
    }, 500);
  };
}

export default withAppContext(Navigation as React.ComponentClass);
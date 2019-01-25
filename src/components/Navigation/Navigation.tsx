import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { connectSocket } from 'src/store/socket/actions';
import StyledNavigation from './StyledNavigation';
import { faCog, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { withTranslations } from '../../utilities/withTranslations';
import UnreadMessagesCounter from '../UnreadMessagesCounter/UnreadMessageCounter';
import { IAppContext } from '../../utilities/TranslationsProvider';

interface INavDispatchProps {
  connectToSockets: () => void;
}

interface INavProps {
  appContext: IAppContext;
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

    // @ts-ignore
    this.props.connectToSockets();
  }

  public render() {
    const { appContext } = this.props;
    const { shouldBlink } = this.state;

    return appContext && (
      <StyledNavigation>
        <li>
          <NavLink exact={true} activeClassName='active' className={shouldBlink ? 'blinking' : 'no-blinking'}
                   to='/chat'>
            <FontAwesomeIcon icon={faComment} color="white" size="lg"/>
            <UnreadMessagesCounter count={13}/>
            <span>{appContext.nav.chatTabLabel}</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/settings'>
            <FontAwesomeIcon icon={faCog} color="white" size="lg"/>
            <span>{appContext.nav.settingsTabLabel}</span>
          </NavLink>
        </li>
      </StyledNavigation>
    );
  }

 /* private startBlinking = (): void => {
    this.setState({
      shouldBlink: true
    });
  };

  private stopBlinking = (): void => {
    this.setState({
      shouldBlink: false
    });
  };*/
}


const mapDispatchToProps = (dispatch: Dispatch<any>): INavDispatchProps => ({
  connectToSockets: () => dispatch(connectSocket())
});

export default withTranslations(connect(null, mapDispatchToProps)(Navigation));
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
import { IMessage } from '../Message/Message';

interface INavDispatchProps {
  connectToSockets: () => void;
}

interface INavProps {
  appContext: IAppContext;
  messages: [];
  connectToSockets: () => void;
  username: string;
}

interface INavState {
  shouldBlink: boolean;
  unreadMessages: number;
}

class Navigation extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      shouldBlink: false,
      unreadMessages: 0,
    };
  }

  public componentDidMount(): void {
    this.props.connectToSockets();
    this.setState({ unreadMessages: 0 });
  }

  public componentDidUpdate(prevProps: any): void {
    const { messages, username } = this.props;

    if (prevProps.messages.length !== messages.length) {
      if (messages.filter((msg: IMessage) => msg.from === username).length === 0) {
        this.startBlinking();
        this.updateUnreadMessagesCount();
      }
    }
  }

  public render() {
    const { appContext } = this.props;
    const { shouldBlink, unreadMessages } = this.state;

    return appContext && (
      <StyledNavigation>
        <li>
          <NavLink exact={true} activeClassName='active' className={shouldBlink ? 'blinking' : 'no-blinking'}
                   to='/chat'>
            <FontAwesomeIcon icon={faComment} color="white" size="lg"/>
            <UnreadMessagesCounter count={unreadMessages}/>
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

  private startBlinking = (): void => {
    this.setState({
      shouldBlink: true
    });
  };
  /*
   private stopBlinking = (): void => {
     this.setState({
       shouldBlink: false
     });
   };*/

  private updateUnreadMessagesCount = () => {
    const { messages } = this.props;

    const receivedUnreadMessages = messages.filter((msg: IMessage) => msg.type === 'received');
    console.log('revei: ', receivedUnreadMessages);
    this.setState({
      unreadMessages: receivedUnreadMessages.length
    });
  };
}

const mapStateToProps = (state: any) => ({
  messages: state.messageState.messages,
  username: state.messageState.username,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): INavDispatchProps => ({
  connectToSockets: () => dispatch(connectSocket())
});

export default withTranslations(connect(mapStateToProps, mapDispatchToProps)(Navigation));
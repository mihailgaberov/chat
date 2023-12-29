import * as React from 'react';
import { connect } from 'react-redux';
import StyledNavigation from './StyledNavigation';
import { faCog, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { withTranslations } from '../../utilities/withTranslations';
import UnreadMessagesCounter from '../UnreadMessagesCounter/UnreadMessageCounter';
import { IAppContext } from '../../utilities/TranslationsProvider';
import { IMessage } from '../Message/Message';
import { isPageActive } from '../../utilities/common';

interface INavProps {
  appContext: IAppContext;
  messages: [];
  username: string;
}

interface INavState {
  shouldBlink: boolean;
  unreadMessages: number;
  receivedUnreadMessages: IMessage[];
}

export class Navigation extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      shouldBlink: false,
      unreadMessages: 0,
      receivedUnreadMessages: [],
    };
  }

  public componentDidUpdate(prevProps: any): void {
    const { messages } = this.props;

    if (prevProps.messages.length !== messages.length && isPageActive('settings')) {
      const lastMessage: IMessage = messages[messages.length-1];
      this.setState({
        receivedUnreadMessages: [...this.state.receivedUnreadMessages, lastMessage]
    }, () => {
        this.startBlinking();
        this.updateUnreadMessagesCount();
      });
    }
  }

  public render() {
    const { appContext } = this.props;
    const { shouldBlink, unreadMessages } = this.state;

    return appContext && (
      <StyledNavigation>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : shouldBlink ? "blinking" : "no-blinking")}
                   onClick={this.clearNotifications}
                   to='/chat'>
            <FontAwesomeIcon icon={faComment} color="white" size="lg"/>
            <UnreadMessagesCounter count={unreadMessages}/>
            <span>{appContext.nav.chatTabLabel}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/settings'>
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

  private stopBlinking = (): void => {
    this.setState({
      shouldBlink: false
    });
  };

  private updateUnreadMessagesCount = () => {
    this.setState({
      unreadMessages: this.state.receivedUnreadMessages.length
    });
  };

  private clearNotifications = () => {
    this.setState({ unreadMessages: 0, receivedUnreadMessages: [] });
    this.stopBlinking();
  };
}

const mapStateToProps = (state: any) => ({
  messages: state.messageState.messages,
  username: state.messageState.username,
});

export default withTranslations(connect(mapStateToProps)(Navigation));

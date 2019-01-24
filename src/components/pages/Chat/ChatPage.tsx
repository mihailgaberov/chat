import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ChatArea from '../../ChatArea/ChatArea';
import MessageSender from '../../MessageSender';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';
import { connectSocket } from 'src/store/socket/actions';

interface IChatPageDispatchProps {
  connectToSockets: () => void
}

class ChatPage extends React.Component<{ appContext: IAppContext }> {
  public render() {
    return (
      <StyledPageContainer>
        <ChatArea/>
        <MessageSender/>
      </StyledPageContainer>
    );
  }

  public componentDidMount(): void {
    // @ts-ignore
    this.props.connectToSockets();
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IChatPageDispatchProps => ({
  connectToSockets: () => dispatch(connectSocket()),
});

export default withTranslations(connect(null, mapDispatchToProps)(ChatPage));
import * as React from 'react';
import {IAppContext, withAppContext} from '../../../utilities/AppContext';

const ChatPage = ({appContext}: { appContext: IAppContext }) =>
  (
    <div>
      <h3>{appContext.nav.chatTabLabel}</h3>
    </div>
  );

export default withAppContext(ChatPage as React.FunctionComponent);
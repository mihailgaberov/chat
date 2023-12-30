import * as React from 'react';
import StyledUnreadMessagesCounter from './StyledUnreadMessagesCounter';

interface IUnreadMessagesCounterProps {
  count: number;
}

class UnreadMessagesCounter extends React.Component<IUnreadMessagesCounterProps> {
  public render() {
    const {count} = this.props;

    return (
      count > 0 && <StyledUnreadMessagesCounter>
        {count}
      </StyledUnreadMessagesCounter>
    );
  }
}

export default UnreadMessagesCounter;
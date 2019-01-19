import * as React from 'react';
import StyledUnreadMessagesCounter from './StyledUnreadMessagesCounter';

interface IUnreadMessagesCounterProps {
  count: number;
}

const UnreadMessagesCounter = ({count}: IUnreadMessagesCounterProps): any => (
    count && <StyledUnreadMessagesCounter>
      {count}
    </StyledUnreadMessagesCounter>
  );

export default UnreadMessagesCounter;
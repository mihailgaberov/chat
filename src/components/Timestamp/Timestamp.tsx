import * as React from 'react';
import StyledTimestamp from './StyledTimestamp';

const Timestamp = ({value}: {value: string}) => (
  <StyledTimestamp>
    {value}
  </StyledTimestamp>
);

export default Timestamp;
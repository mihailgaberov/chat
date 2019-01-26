import * as React from 'react';
import StyledNickname from './StyledNickname';

const Nickname = ({value}: {value: string}) => (
  <StyledNickname>
    {value}
  </StyledNickname>
);

export default Nickname;
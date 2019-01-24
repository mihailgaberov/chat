import * as React from 'react';
import StyledNickname from './StyledNickname';

const Nickname = ({value, shouldRender}: {value: string, shouldRender: boolean}) => (
  <StyledNickname>
    {shouldRender ? `${value},` : ''}
  </StyledNickname>
);

export default Nickname;
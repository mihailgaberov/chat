import styled from '../../theme';

const StyledChatArea = styled("section")`
  color: ${(props) => props.theme.primaryLightColor};
  background-color: ${(props) => props.theme.secondaryDarkColor};
`;

export default StyledChatArea;
import styled from '../../theme';

const StyledChatArea = styled("section")`
  color: ${(props) => props.theme.primaryLightColor};
  background-color: ${(props) => props.theme.secondaryDarkColor};
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  left: 0;
  
  #nickname-container {
    clear: both;
  }
`;

export default StyledChatArea;
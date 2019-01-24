import styled from '../../theme';

const StyledChatArea = styled("section")`
  color: ${(props) => props.theme.primaryLightColor};
  background-color: ${(props) => props.theme.secondaryDarkColor};
  display: inline-block;
  position: absolute;
  bottom: 74px;
  width: 100%;
  height: 533px;
  overflow-y: scroll;
  left: 0;
  
  #nickname-container {
    clear: both;
  }
`;

export default StyledChatArea;
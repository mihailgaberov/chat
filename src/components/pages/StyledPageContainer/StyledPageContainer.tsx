import styled from '../../../theme';

const StyledPageContainer = styled("section")`
  text-align: center;
  margin-top: 60px;
  height: 100vh;
  color: ${props => props.theme.secondaryLightColor};
  background-color: ${props => props.theme.secondaryDarkColor};
`;

export default StyledPageContainer;
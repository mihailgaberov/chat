import styled from '../../../theme';

const StyledPageContainer = styled("section")`
  text-align: center;
  margin-top: 60px;
  height: calc( 100vh - 60px);
  color: ${props => props.theme.secondaryLightColor};
  background-color: ${props => props.theme.secondaryDarkColor};
`;

export default StyledPageContainer;
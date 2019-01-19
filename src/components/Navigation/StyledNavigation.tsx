import styled from '../../theme';

const StyledNavigation = styled("ul")`
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.secondaryColor};
  
  li {
    width: 100%;
    a {
      display: block;
      color: ${props => props.theme.primaryColor};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
        
      &:hover {
        background-color: ${props => props.theme.tertiaryColor};
      }
      
      &.active {
        background-color: ${props => props.theme.tertiaryColor};
        border-bottom: 3px solid #ccc;
      }
      
      span {
        padding: 14px;
      }
    }  
  }
`;

export default StyledNavigation;
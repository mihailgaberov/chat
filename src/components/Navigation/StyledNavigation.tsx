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
  background-color: ${props => props.theme.secondaryLightColor};
  
  li {
    width: 100%;
    a {
      display: block;
      color: ${props => props.theme.primaryLightColor};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
        
      &:hover {
        background-color: ${props => props.theme.secondaryDarkColor};
      }
      
      &.active {
        background-color: ${props => props.theme.secondaryDarkColor};
        border-bottom: 3px solid #ccc;
      }
      
      span {
        padding: 14px;
        font-size: 1.4em;
      }
    }
    
    .blinking {
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0% {
        background-color: ${props => props.theme.secondaryLightColor};
      }
      100% {
        background-color: ${props => props.theme.primaryDarkColor};
      }
    }
    
    .no-blinking {
      background-color: unset;
    }
  }
`;

export default StyledNavigation;
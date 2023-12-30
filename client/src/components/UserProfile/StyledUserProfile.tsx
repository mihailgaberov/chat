import styled from '../../theme';

const StyledUserProfile = styled("div")`
 padding: 14px;
 text-align: left;
 
 label {
  font-size: 1.2em;
 }
 
 input {
  color: ${props => props.theme.primaryDarkColor};
  width: 100%;
  line-height: 28px;
  margin-top: 7px;
  font-size: 1.1em;
  box-sizing: border-box;
  padding: 7px;
 }
`;

export default StyledUserProfile;
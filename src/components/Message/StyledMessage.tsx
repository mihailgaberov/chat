import styled from '../../theme';

const StyledMessage = styled("div")<{ type: string }>`
  float: ${props => props.type === 'sent' ? 'right' : 'left'};
  background-color: ${props => props.theme.messageBackgroundColor};
  border-radius: 7px;
  font-size: .9em;
  width: auto;
  padding: 7px;
  margin: 14px;
  display: block;
  clear: both;
`;

export default StyledMessage;
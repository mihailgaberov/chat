import styled from '../../theme';

const StyledMessage = styled("div")<{ type: string }>`
  float: ${props => props.type === 'sent' ? 'right' : 'left'};
  background-color: ${props => props.theme.messageBackgroundColor};
  border-radius: ${props => props.type === 'sent' ? '7px 0 0 7px;' : '0 7px 7px 7px;'};
  font-size: .9em;
  width: auto;
  padding: 7px;
  margin: ${props => props.type === 'sent' ? '4px 0' : '4px 14px'};
  display: block;
  clear: both;
`;

export default StyledMessage;
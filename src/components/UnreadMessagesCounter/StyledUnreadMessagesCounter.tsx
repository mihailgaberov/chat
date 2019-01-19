import styled from '../../theme';

const StyledUnreadMessagesCounter = styled("div")`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  float: right;
  position: relative;
  right: 22%;
  margin-top: -11px;
`;

export default StyledUnreadMessagesCounter;
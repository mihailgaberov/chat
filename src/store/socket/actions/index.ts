export const CONNECTION_CHANGED = 'CONNECTION_CHANGED';
export const CONNECT_SOCKET = 'CONNECT_SOCKET';

export const connectionChanged = (isConnected: boolean) => {
  return {
    type: CONNECTION_CHANGED,
    connected: isConnected,
    isError: false
  };
};

export const connectSocket = () => {
  return {
    type: CONNECT_SOCKET
  };
};
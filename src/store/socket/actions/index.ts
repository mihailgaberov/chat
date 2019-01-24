export const CONNECTION_CHANGED = 'socket/connection-changed';
export const CONNECT_SOCKET = 'socket/connect';

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
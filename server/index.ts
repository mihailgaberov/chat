const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connect', (socket: any) => {
  // Say Hi to all connected clients
  io.emit('broadcast', '[Server]: Welcome stranger!');

  socket.on('chat message', (msg: { message: string}) => {
    console.log(`message: ${msg.message}`);
    io.emit('chat message', msg);
  });

  // Say Bye to all connected clients
  socket.on('disconnect', function(){
    io.emit('broadcast', '[Server]: Bye, bye, stranger!');
  });
});


http.listen(3001, () => {
  console.log('listening on *:3001');
});
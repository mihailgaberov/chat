const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req: any, res: any) => res.sendFile(__dirname + '/index.html'));

io.on('connect', (socket: any) => {
  // Say Hi to all connected clients
  io.emit('broadcast', '[Server]: Welcome stranger!');

  socket.on('message', (msg: { from: string, content: string }) => {
    console.log(`message received from user: ${msg.from}`);
    console.log(`message received content: ${msg.content}`);
    io.emit('message', msg);
  });

  // Say Bye to all connected clients
  socket.on('disconnect', function () {
    io.emit('broadcast', '[Server]: Bye, bye, stranger!');
  });
});


http.listen(3001, () => {
  console.log('listening on *:3001');
});
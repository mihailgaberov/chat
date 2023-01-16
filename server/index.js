const path = require('path');
const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
  // Say Hi to all connected clients
  io.emit('broadcast', '[Server]: Welcome stranger!');

  socket.on('message', (msg) => {
    console.log(`message received from user: ${msg.from}`);
    console.log(`message received content: ${msg.content}`);
    io.emit('message', msg);
  });

  // Say Bye to all connected clients
  socket.on('disconnect', function () {
    io.emit('broadcast', '[Server]: Bye, bye, stranger!');
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

httpServer.listen(port, () => {
  console.log('listening on *:3001');
});

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1538389",
  key: "b0df7f6ae0d889e0b55f",
  secret: "6c986b2b37f791bdca3a",
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

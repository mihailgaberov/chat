import Pusher from 'pusher';
import express from 'express';

import cors from 'cors';
import http from 'http';
import 'dotenv/config'

const app = express();
const httpServer = http.createServer(app);
app.use(cors());

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: "eu",
  useTLS: true
});
const port = process.env.PORT || 3001;
app.set('PORT', port);

app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: port }, resolve));

console.log(`🚀 Server ready at http://${httpServer.address().address}:${httpServer.address().port}`);
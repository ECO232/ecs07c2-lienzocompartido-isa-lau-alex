import express from 'express';
import http from 'http';
import {Server, Socket} from 'socket.io';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const server = http.createServer(app);
const io = new Server(server);

console.log(__dirname + '/public')
app.use(express.static(__dirname + '/public' ));


io.on('connection', (socket) => {
  console.log('Hay un cliente');
  
  socket.on('enviar-elemento', (elemento) => {
    io.emit('elemento-recibido', elemento)
  })
  
  socket.on('enviar-cursor', (elemento) => {
    io.emit('cursor-recibido', elemento)
  })
  
  socket.on('disconnect', () => {
    console.log('Hay un cliente desconectado');
  })
})

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
})
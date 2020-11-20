// requires
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// app and server creation
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// get request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// socket connection
io.on('connection', (socket) => {
    console.log('a user connected');

    // disconnect event
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    // chat message event
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    })
});

// set up server to listen
server.listen(3000, () => {
    console.log('listening on *:3000');
});
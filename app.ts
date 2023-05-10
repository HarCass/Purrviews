import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import { customErrors, serverErrors, dbErrors } from "./controllers/errors";
import http from 'http';
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http:/10.0.0.13',
    }
});

app.use(cors());
app.use(express.json());

interface chatUserType {
    username: string,
    socketId: string
}

interface chatRoomType {
    id: string,
    users: chatUserType[],
}

interface messageType {
    body: string,
    roomId: string
}

const rooms: chatRoomType[]  = [];

io.on('connection', (socket) => {
    console.log(`${socket.id} user connected!`);

    socket.on('newUser', (username) => {
        socket.data = username;
        io.emit('newUserRes', `${socket.id} given username ${socket.data}`);
    });

    socket.on('roomJoin', (data: {id:string, username:string}) => {
        let newRoom = true;
        for (const room of rooms) {
            if (data.id === room.id) {
                newRoom = false;
                break;
            }
        }
        if (newRoom) rooms.push({id: data.id, users: [{username: data.username, socketId: socket.id}]});
        else {
            rooms.forEach(room => {
                if (data.id === room.id) room.users.push({username: data.username, socketId: socket.id});
            });
        }
        console.log(`${socket.id} joined room ${data.id}`);
    });

    socket.on('roomLeave', (data: {id:string}) => {
        rooms.forEach((room, index) => {
            if (room.id === data.id) {
                room.users.forEach((user, index) => {
                    if (user.socketId === socket.id) room.users.splice(index, 1);
                });
            };
            if (room.users.length <= 0) rooms.splice(index, 1);
        });
        console.log(`${socket.id} left room ${data.id}`);
    });

    socket.on('message', (message: messageType) => {
        io.emit('messageRes', message);
    });

    socket.on('disconnect', () => {
        rooms.forEach((room, index) => {
            room.users.forEach((user, index) => {
                if (user.socketId === socket.id) room.users.splice(index, 1);
            });
            if (room.users.length <= 0) rooms.splice(index, 1);
        });
        console.log(`${socket.id} user disconnected!`);
        socket.disconnect();
    });
});

app.use('/api', apiRouter);

app.use(customErrors);
app.use(dbErrors);
app.use(serverErrors);

export default httpServer;
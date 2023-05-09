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

interface chatUser {
    username: string,
    socketId: string
}
let users: chatUser[] = [];

io.on('connection', (socket) => {
    console.log(`${socket.id} user connected!`);

    socket.on('newUser', (user) => {
        let newUser = true;
        for (const activeUser of users) {
            if(user.username === activeUser.username) {
                newUser = false;
                break;
            }
        }

        if (newUser) {
            users.push(user);
        }
        io.emit('newUserRes', users);
    });

    socket.on('directMessage', (message) => {
        console.log(message);
        io.emit('ping', 'recieved');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        users = users.filter((user) => user.socketId !== socket.id);
        socket.disconnect();
    });
});

app.use('/api', apiRouter);

app.use(customErrors);
app.use(dbErrors);
app.use(serverErrors);

export default httpServer;
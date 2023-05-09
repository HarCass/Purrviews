import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import { customErrors, serverErrors, dbErrors } from "./controllers/errors";
import http from 'http';
import { Server } from "socket.io";

const app = express();
const httpServer = new http.Server(app);
const io = new Server(httpServer, {
    cors: {
        origin: "exp://10.0.0.6:19000",
    }
});

app.use(cors());
app.use(express.json());

interface chatUser {
    username: string,
    socketId: string
}
let users: string[] = [];
io.on('connection', (socket) => {
    console.log(`${socket.id} user connected!`);
    if (!users.includes(socket.id)) users.push(socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected');
        users = users.filter((user) => user !== socket.id);
        socket.disconnect();
    });
});

app.use('/api', apiRouter);
app.use(customErrors);
app.use(dbErrors);
app.use(serverErrors);

export default app;
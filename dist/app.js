"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./routes/api"));
const errors_1 = require("./controllers/errors");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: 'http:/10.0.0.13',
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '5mb' }));
const rooms = [];
io.on('connection', (socket) => {
    console.log(`${socket.id} user connected!`);
    socket.on('newUser', (username) => {
        if (socket.data !== username) {
            socket.data = username;
            io.emit('newUserRes', `${socket.id} given username ${socket.data}`);
        }
    });
    socket.on('roomJoin', (data) => {
        let newRoom = true;
        for (const room of rooms) {
            if (data.id === room.id) {
                newRoom = false;
                break;
            }
        }
        if (newRoom)
            rooms.push({ id: data.id, users: [{ username: data.username, socketId: socket.id }] });
        else {
            rooms.forEach(room => {
                if (data.id === room.id)
                    room.users.push({ username: data.username, socketId: socket.id });
            });
        }
        console.log(`${socket.id} joined room ${data.id}`);
    });
    socket.on('roomLeave', (data) => {
        rooms.forEach((room, index) => {
            if (room.id === data.id) {
                room.users.forEach((user, index) => {
                    if (user.socketId === socket.id)
                        room.users.splice(index, 1);
                });
            }
            ;
            if (room.users.length <= 0)
                rooms.splice(index, 1);
        });
        console.log(`${socket.id} left room ${data.id === 'self' ? socket.data : data.id}`);
    });
    socket.on('message', (message) => {
        io.emit('messageRes', message);
    });
    socket.on('disconnect', () => {
        rooms.forEach((room, index) => {
            room.users.forEach((user, index) => {
                if (user.socketId === socket.id)
                    room.users.splice(index, 1);
            });
            if (room.users.length <= 0)
                rooms.splice(index, 1);
        });
        console.log(`${socket.id} user disconnected!`);
        socket.disconnect();
    });
});
app.use('/api', api_1.default);
app.use(errors_1.customErrors);
app.use(errors_1.dbErrors);
app.use(errors_1.serverErrors);
exports.default = httpServer;

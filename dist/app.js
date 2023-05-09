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
const httpServer = new http_1.default.Server(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "exp://10.0.0.6:19000",
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let users = [];
io.on('connection', (socket) => {
    console.log(`${socket.id} user connected!`);
    if (!users.includes(socket.id))
        users.push(socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected');
        users = users.filter((user) => user !== socket.id);
        socket.disconnect();
    });
});
app.use('/api', api_1.default);
app.use(errors_1.customErrors);
app.use(errors_1.dbErrors);
app.use(errors_1.serverErrors);
exports.default = app;

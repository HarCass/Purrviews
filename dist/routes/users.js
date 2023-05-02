"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const usersRouter = express_1.default.Router();
usersRouter.get("/", users_1.getUsers);
usersRouter.post("/", users_1.postUser);
usersRouter.get("/:username", users_1.getUserByUsername);
usersRouter.delete("/:username", users_1.deleteUser);
usersRouter.get('/:username/cats', users_1.getUserCats);
exports.default = usersRouter;

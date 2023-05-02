import express from "express";
import { getUsers, postUser, getUserByUsername } from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

usersRouter.post('/', postUser);

usersRouter.get('/:username', getUserByUsername);

export default usersRouter;
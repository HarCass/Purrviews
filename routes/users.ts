import express from "express";
import { getUsers, postUser, getUserByUsername, getUserCats, getCatById } from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

usersRouter.post('/', postUser);

usersRouter.get('/:username', getUserByUsername);

usersRouter.get('/:username/cats', getUserCats);

usersRouter.get('/:username/:cat_id', getCatById);

export default usersRouter;
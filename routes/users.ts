import express from "express";
import { getUsers, postUser, getUserByUsername, getUserCats, deleteUser, getCatById, patchCatById } from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.post("/", postUser);

usersRouter.get("/:username", getUserByUsername);

usersRouter.delete("/:username", deleteUser);

usersRouter.get('/:username/cats', getUserCats);

usersRouter.get('/:username/:cat_id', getCatById);

usersRouter.patch('/:username/cats/:cat_id', patchCatById);

export default usersRouter;

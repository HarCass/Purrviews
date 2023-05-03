import express from "express";
import { getUsers, postUser, getUserByUsername, getUserCats, deleteUser, getCatById, deleteCatById } from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.post("/", postUser);

usersRouter.get("/:username", getUserByUsername);

usersRouter.delete("/:username", deleteUser);

usersRouter.get('/:username/cats', getUserCats);

usersRouter.get('/:username/cats/:cat_id', getCatById);

usersRouter.delete('/:username/cats/:cat_id', deleteCatById);

export default usersRouter;

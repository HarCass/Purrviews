import express from "express";
import { getUsers, postUser, getUserByUsername, deleteUser } from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.post("/", postUser);

usersRouter.get("/:username", getUserByUsername);

usersRouter.delete("/:username", deleteUser);

export default usersRouter;

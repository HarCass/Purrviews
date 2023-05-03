import express from "express";
import { getUsers, postUser, getUserByUsername, getUserCats, deleteUser, postUserCats} from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.post("/", postUser);

usersRouter.get("/:username", getUserByUsername);

usersRouter.delete("/:username", deleteUser);

usersRouter.get('/:username/cats', getUserCats);

usersRouter.post('/:username/cats', postUserCats);

export default usersRouter;

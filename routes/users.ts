import express from "express";
import { getUsers, postUser, getUserByUsername, getUserCats, deleteUser, getCatById, deleteCatById, patchCatById, postUserCats} from "../controllers/users";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.post("/", postUser);

usersRouter.get("/:username", getUserByUsername);

usersRouter.delete("/:username", deleteUser);

usersRouter.get('/:username/cats', getUserCats);

usersRouter.get('/:username/cats/:cat_id', getCatById);

usersRouter.delete('/:username/cats/:cat_id', deleteCatById);

usersRouter.patch('/:username/cats/:cat_id', patchCatById);

usersRouter.post('/:username/cats', postUserCats);

export default usersRouter;

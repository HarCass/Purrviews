import express from "express";
import usersRouter from "./users";
import postsRouter from "./posts";
import catsRouter from "./cats";
import getEndpoints from "../controllers/api";

const apiRouter = express.Router();

apiRouter.get('/', getEndpoints);

apiRouter.use('/users', usersRouter);

apiRouter.use('/posts', postsRouter);

apiRouter.use('/cats', catsRouter);

export default apiRouter;
import express from "express";
import usersRouter from "./users";
import postsRouter from "./posts";

const apiRouter = express.Router();

apiRouter.use('/users', usersRouter);

apiRouter.use('/posts', postsRouter);

export default apiRouter;
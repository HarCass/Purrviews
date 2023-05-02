import express from 'express';
import { getPosts, postPost } from '../controllers/posts';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);

postsRouter.post('/', postPost);

export default postsRouter;
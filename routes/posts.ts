import express from 'express';
import { getPosts, postPost, getPostById } from '../controllers/posts';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);

postsRouter.post('/', postPost);

postsRouter.get('/:post_id', getPostById);

export default postsRouter;
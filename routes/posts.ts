import express from 'express';
import { getPosts, postPost, getPostById, deletePostById } from '../controllers/posts';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);

postsRouter.post('/', postPost);

postsRouter.get('/:post_id', getPostById);

postsRouter.delete('/:post_id', deletePostById);

export default postsRouter;
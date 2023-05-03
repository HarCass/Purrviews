import express from 'express';
import { getPosts, postPost, getPostById, deletePostById, patchPostById} from '../controllers/posts';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);

postsRouter.post('/', postPost);

postsRouter.get('/:post_id', getPostById);

postsRouter.delete('/:post_id', deletePostById);

postsRouter.patch('/:post_id', patchPostById);

export default postsRouter;
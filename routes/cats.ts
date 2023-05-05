import express from 'express';
import { getMissingcats } from '../controllers/cats';

const catsRouter = express.Router();

catsRouter.get('/missing', getMissingcats);

export default catsRouter;

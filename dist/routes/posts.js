"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = require("../controllers/posts");
const postsRouter = express_1.default.Router();
postsRouter.get('/', posts_1.getPosts);
postsRouter.post('/', posts_1.postPost);
postsRouter.get('/:post_id', posts_1.getPostById);
postsRouter.delete('/:post_id', posts_1.deletePostById);
postsRouter.patch('/:post_id', posts_1.patchPostById);
exports.default = postsRouter;

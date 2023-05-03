"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.deletePostById = exports.getPostById = exports.postPost = exports.getPosts = void 0;
=======
exports.patchPostById = exports.getPostById = exports.postPost = exports.getPosts = void 0;
>>>>>>> main
const posts_1 = require("../models/posts");
const getPosts = (req, res, next) => {
    return (0, posts_1.findPosts)()
        .then(posts => res.status(200).send({ posts }));
};
exports.getPosts = getPosts;
const postPost = (req, res, next) => {
    const data = req.body;
    return (0, posts_1.checkUsernameExists)(data.username)
        .then(() => (0, posts_1.insertPost)(data))
        .then(post => res.status(201).send({ post }))
        .catch(next);
};
exports.postPost = postPost;
const getPostById = (req, res, next) => {
    const { post_id } = req.params;
    return (0, posts_1.findPostById)(post_id)
        .then(post => res.status(200).send({ post }))
        .catch(next);
};
exports.getPostById = getPostById;
<<<<<<< HEAD
const deletePostById = (req, res, next) => {
    const { post_id } = req.params;
    return (0, posts_1.deletePost)(post_id)
        .then(() => {
        res.sendStatus(204);
    })
        .catch(next);
};
exports.deletePostById = deletePostById;
=======
const patchPostById = (req, res, next) => {
    const { post_id } = req.params;
    const { inc_votes } = req.body;
    return (0, posts_1.updatePostById)(post_id, inc_votes)
        .then(post => res.status(200).send({ post }))
        .catch(next);
};
exports.patchPostById = patchPostById;
>>>>>>> main

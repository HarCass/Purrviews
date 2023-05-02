"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPost = exports.getPosts = void 0;
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

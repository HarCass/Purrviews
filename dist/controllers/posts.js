"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
const posts_1 = require("../models/posts");
const getPosts = (req, res, next) => {
    return (0, posts_1.findPosts)()
        .then(posts => res.status(200).send({ posts }));
};
exports.getPosts = getPosts;

import { findPosts, insertPost, checkUsernameExists } from "../models/posts"
import { RequestHandler } from "express";

export const getPosts: RequestHandler = (req, res, next) => {
    return findPosts()
    .then(posts => res.status(200).send({posts}));
}

export const postPost: RequestHandler = (req, res, next) => {
    const data = req.body;
    return checkUsernameExists(data.username)
    .then(() => insertPost(data))
    .then(post => res.status(201).send({post}))
    .catch(next);
}
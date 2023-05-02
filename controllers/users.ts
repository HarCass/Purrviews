import { findUsers, insertUser, findUserCats } from "../models/users"
import { RequestHandler } from "express";

export const getUsers: RequestHandler = (req, res, next) => {
    return findUsers()
    .then(users => res.status(200).send({users}));
}

export const postUser: RequestHandler = (req, res, next) => {
    const data = req.body;
    return insertUser(data)
    .then(user => res.status(201).send({user}))
    .catch(next)
}

export const getUserCats: RequestHandler = (req, res, next) => {
    const {username} = req.params;
    return findUserCats(username)
    .then(cats => res.status(200).send({cats}));
}
import { findUsers, insertUser } from "../models/users"
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
import { findUsers, insertUser, findUsersByUsername, removeUser, findUserCats, findUserCatById, removeCatById, updateCatById } from "../models/users";
import { checkUsernameExists } from "../models/posts";
import { RequestHandler } from "express";

export const getUsers: RequestHandler = (req, res, next) => {
    return findUsers().then((users) => res.status(200).send({ users }));
};

export const postUser: RequestHandler = (req, res, next) => {
    const data = req.body;
    return insertUser(data)
        .then((user) => res.status(201).send({ user }))
        .catch(next);
};

export const getUserByUsername: RequestHandler = (req, res, next) => {
    const { username } = req.params;
    return findUsersByUsername(username)
        .then((users) => {
            res.status(200).send({ users });
        })
        .catch(next);
};

export const deleteUser: RequestHandler = (req, res, next) => {
    const { username } = req.params;
    return removeUser(username)
        .then(() => {
            res.sendStatus(204);
        })
        .catch(next);
};

export const getUserCats: RequestHandler = (req, res, next) => {
    const { username } = req.params;
    return findUserCats(username)
        .then((cats) => res.status(200).send({ cats }))
        .catch(next);
};


export const getCatById: RequestHandler = (req, res, next) => {
    const {username, cat_id} = req.params;
    return findUserCatById(username, Number(cat_id))
    .then(cat => res.status(200).send({cat}))
    .catch(next);
}

export const deleteCatById: RequestHandler = (req, res, next) => {
    const {username, cat_id} = req.params;
    return checkUsernameExists(username)
    .then(() => removeCatById(username, Number(cat_id)))
    .then(() => res.sendStatus(204))
    .catch(next);
}

export const patchCatById: RequestHandler = (req, res, next) => {
    const {username, cat_id} = req.params;
    const {missing} = req.body;
    return checkUsernameExists(username)
    .then(() => updateCatById (username, Number(cat_id), missing))
    .then(cat => res.status(200).send({cat}))
    .catch(next);
}
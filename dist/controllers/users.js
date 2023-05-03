"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.getCatById = exports.getUserCats = exports.getUserByUsername = exports.postUser = exports.getUsers = void 0;
=======
exports.getUserCats = exports.deleteUser = exports.getUserByUsername = exports.postUser = exports.getUsers = void 0;
>>>>>>> main
const users_1 = require("../models/users");
const getUsers = (req, res, next) => {
    return (0, users_1.findUsers)().then((users) => res.status(200).send({ users }));
};
exports.getUsers = getUsers;
const postUser = (req, res, next) => {
    const data = req.body;
    return (0, users_1.insertUser)(data)
        .then((user) => res.status(201).send({ user }))
        .catch(next);
};
exports.postUser = postUser;
const getUserByUsername = (req, res, next) => {
    const { username } = req.params;
    return (0, users_1.findUsersByUsername)(username)
        .then((users) => {
        res.status(200).send({ users });
    })
        .catch(next);
};
exports.getUserByUsername = getUserByUsername;
const deleteUser = (req, res, next) => {
    const { username } = req.params;
    return (0, users_1.removeUser)(username)
        .then(() => {
        res.sendStatus(204);
    })
        .catch(next);
};
exports.deleteUser = deleteUser;
const getUserCats = (req, res, next) => {
    const { username } = req.params;
    return (0, users_1.findUserCats)(username)
        .then((cats) => res.status(200).send({ cats }))
        .catch(next);
};
exports.getUserCats = getUserCats;
const getCatById = (req, res, next) => {
    const { username, cat_id } = req.params;
    return (0, users_1.findUserCatById)(username, Number(cat_id))
        .then(cat => res.status(200).send({ cat }))
        .catch(next);
};
exports.getCatById = getCatById;

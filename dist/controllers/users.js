"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = exports.postUser = exports.getUsers = void 0;
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const users_1 = require("../models/users");
const getUsers = (req, res, next) => {
    return (0, users_1.findUsers)()
        .then(users => res.status(200).send({ users }));
};
exports.getUsers = getUsers;

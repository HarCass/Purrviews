"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = void 0;
const connection_1 = require("../db/connection");
const collection = connection_1.db.collection('users');
const findUsers = () => {
    return collection.find({}).toArray();
};
exports.findUsers = findUsers;

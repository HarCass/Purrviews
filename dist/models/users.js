"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = exports.findUsers = void 0;
const mongodb_1 = require("mongodb");
const connection_1 = require("../db/connection");
const collection = connection_1.db.collection('users');
const findUsers = () => {
    return collection.find({}).toArray();
};
exports.findUsers = findUsers;
const insertUser = (user) => {
    user.cats = [];
    return collection.insertOne(user)
        .then((data) => {
        return collection.findOne({ _id: new mongodb_1.ObjectId(data.insertedId) });
    });
};
exports.insertUser = insertUser;

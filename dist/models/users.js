"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserCats = exports.removeUser = exports.findUsersByUsername = exports.insertUser = exports.findUsers = void 0;
const mongodb_1 = require("mongodb");
const connection_1 = require("../db/connection");
const collection = connection_1.db.collection("users");
const findUsers = () => {
    return collection.find({}).toArray();
};
exports.findUsers = findUsers;
const insertUser = (user) => {
    user.cats = [];
    return collection.insertOne(user).then((data) => {
        return collection.findOne({ _id: new mongodb_1.ObjectId(data.insertedId) });
    });
};
exports.insertUser = insertUser;
const findUsersByUsername = (username) => {
    return collection.findOne({ username: username }).then((users) => {
        if (users === null) {
            return Promise.reject({ msg: "Username doesn't exist", status: 404 });
        }
        else {
            return users;
        }
    });
};
exports.findUsersByUsername = findUsersByUsername;
const removeUser = (username) => {
    return collection.deleteOne({ username: username }).then((users) => {
        if (users.deletedCount === 0) {
            return Promise.reject({ msg: "Username doesn't exist", status: 404 });
        }
        else {
            return users;
        }
    });
};
exports.removeUser = removeUser;
const findUserCats = (username) => {
    const filter = {
        username: username,
    };
    const projection = {
        cats: 1,
    };
    return collection.findOne(filter, { projection }).then((data) => {
        if (!data) {
            return Promise.reject({ status: 400, msg: "Username does not exist" });
        }
        return data.cats;
    });
};
exports.findUserCats = findUserCats;

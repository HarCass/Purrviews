"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const seed = (data) => {
    return connection_1.db.dropCollection('users')
        .then(() => connection_1.db.dropCollection('posts'))
        .then(() => connection_1.db.createCollection('users'))
        .then(() => connection_1.db.createCollection('posts'))
        .then(() => {
        const dbUsers = connection_1.db.collection('users');
        dbUsers.createIndex({ username: 'text' }, { unique: true });
        return dbUsers.insertMany(data.users);
    })
        .then(() => {
        const dbPosts = connection_1.db.collection('posts');
        return dbPosts.insertMany(data.posts);
    })
        .catch(err => console.log(err));
};
exports.default = seed;

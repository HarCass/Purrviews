"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPosts = void 0;
const connection_1 = require("../db/connection");
const collection = connection_1.db.collection('posts');
const findPosts = () => {
    return collection.find({}).toArray();
};
exports.findPosts = findPosts;

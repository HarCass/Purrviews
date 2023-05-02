"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostById = exports.findPostById = exports.checkUsernameExists = exports.insertPost = exports.findPosts = void 0;
const connection_1 = require("../db/connection");
const mongodb_1 = require("mongodb");
const collection = connection_1.db.collection('posts');
const findPosts = () => {
    return collection.find({}).toArray();
};
exports.findPosts = findPosts;
const insertPost = (post) => {
    post.votes = 0;
    post.posted_at = new Date().toISOString();
    return collection.insertOne(post)
        .then((data) => collection.findOne({ _id: new mongodb_1.ObjectId(data.insertedId) }));
};
exports.insertPost = insertPost;
const checkUsernameExists = (username) => {
    const userCollection = connection_1.db.collection('users');
    return userCollection.findOne({ username })
        .then(data => {
        if (!data)
            return Promise.reject({ status: 400, msg: 'Username does not exist' });
    });
};
exports.checkUsernameExists = checkUsernameExists;
const findPostById = (id) => {
    if (!mongodb_1.ObjectId.isValid(id)) {
        return Promise.reject({ status: 400, msg: "Invalid id" });
    }
    return collection.findOne({ _id: new mongodb_1.ObjectId(id) })
        .then(data => {
        if (!data) {
            return Promise.reject({ status: 400, msg: "Post does not exist" });
        }
        return data;
    });
};
exports.findPostById = findPostById;
const updatePostById = (id, incVotes) => {
    return collection.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $inc: { 'votes': incVotes } }, { returnDocument: 'after' });
};
exports.updatePostById = updatePostById;

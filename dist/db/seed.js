"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const seedData = __importStar(require("./data/test/index"));
const seed = (data) => {
    connection_1.db.dropCollection('users')
        .then(() => connection_1.db.dropCollection('posts'))
        .then(() => connection_1.db.createCollection('users'))
        .then(() => connection_1.db.createCollection('posts'))
        .then(() => {
        const dbUsers = connection_1.db.collection('users');
        return dbUsers.insertMany(data.users);
    })
        .then(() => {
        const dbPosts = connection_1.db.collection('posts');
        return dbPosts.insertMany(data.posts);
    })
        .catch(err => console.log(err))
        .finally(() => connection_1.connection.close());
};
seed(seedData);
exports.default = seed;

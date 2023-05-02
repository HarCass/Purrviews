"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const seed = (data) => {
    return connection_1.db.dropCollection('users')
        .then(() => connection_1.db.dropCollection('posts'))
        .then(() => connection_1.db.createCollection('users', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                title: "User Object Validation",
                required: ["username"],
                properties: {
                    username: {
                        bsonType: "string",
                        description: "'username' must be a unique string and is required"
                    },
                    description: {
                        bsonType: "string",
                        description: "'desciprtion' must be a string"
                    },
                    avatar: {
                        bsonType: "string",
                        description: "'avatar' must be a string"
                    },
                    cats: {
                        bsonType: "array",
                        description: "'cats' must be an array"
                    }
                }
            }
        }
    }))
        .then(() => connection_1.db.createCollection('posts', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                title: "Post Object Validation",
                required: ["img_url", "username", "lat", "long"],
                properties: {
                    img_url: {
                        bsonType: "string",
                        description: "'img_url' must be a string and is required"
                    },
                    username: {
                        bsonType: "string",
                        description: "'username' must be a string and is required"
                    },
                    lat: {
                        bsonType: "double",
                        description: "'lat' must be a double and is required"
                    },
                    long: {
                        bsonType: "double",
                        description: "'long' must be a double and is required"
                    },
                }
            }
        }
    }))
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

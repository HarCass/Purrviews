import { ObjectId } from "mongodb";
import { db } from "../db/connection";

const collection = db.collection("users");

export const findUsers = () => {
    return collection.find({}).toArray();
};

export const insertUser = (user: any) => {
    user.cats = [];
    return collection.insertOne(user).then((data) => {
        return collection.findOne({ _id: new ObjectId(data.insertedId) });
    });
};

export const findUsersByUsername = (username: any) => {
    return collection.findOne({ username: username }).then((users) => {
        if (users === null) {
            return Promise.reject({ msg: "Username doesn't exist", status: 404 });
        } else {
            return users;
        }
    });
};

export const removeUser = (username: any) => {
    return collection.deleteOne({ username: username }).then((users) => {
        if (users.deletedCount === 0) {
            return Promise.reject({ msg: "Username doesn't exist", status: 404 });
        } else {
            return users;
        }
    });
};

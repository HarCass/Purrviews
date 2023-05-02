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


export const findUserCats = (username: string) => {
    const filter = {
        'username': username
    };

    const projection = {
        'cats': 1
    };

    return collection.findOne(filter, {projection})
    .then(data => {
        if (!data) {
            return Promise.reject({status: 400, msg: "Username does not exist"})
        }
        return data.cats;
    });
}
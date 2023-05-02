import { ObjectId } from "mongodb";
import { db } from "../db/connection";

const collection = db.collection('users');

export const findUsers = () => {
    return collection.find({}).toArray();
}

export const insertUser = (user: any) => {
    user.cats = []
    if (!user.username) {
        return Promise.reject({msg: "Invalid format", status: 400})
    }
    return collection.insertOne(user)
    .then((data) => {
        return collection.findOne({_id: new ObjectId(data.insertedId)})
    })
}
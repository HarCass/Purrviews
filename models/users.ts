import { db } from "../db/connection";

const collection = db.collection('users');

export const findUsers = () => {
    return collection.find({}).toArray();
}
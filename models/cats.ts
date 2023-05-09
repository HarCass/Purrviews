import { db } from "../db/connection";

const collection = db.collection('users');

export const findMissingCats = () => {
    const filter = {
        "cats.missing": true
    }

    const projection = {
        'username': 1,
        'cats': {'$elemMatch': {'missing': true}}
    }

    return collection.find(filter, {projection}).toArray();
}
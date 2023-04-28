import { db } from '../db/connection';

const collection = db.collection('posts');

export const findPosts = () => {
    return collection.find({}).toArray();
}
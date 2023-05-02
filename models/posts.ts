import { db } from '../db/connection';
import { ObjectId } from 'mongodb';

const collection = db.collection('posts');

export const findPosts = () => {
    return collection.find({}).toArray();
}

export const insertPost = (post: any) => {
    post.votes = 0;
    post.posted_at = new Date().toISOString();
    return collection.insertOne(post)
    .then((data ) => collection.findOne({_id: new ObjectId(data.insertedId)}));
}
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

export const checkUsernameExists = (username: string) => {
    const userCollection = db.collection('users');
    return userCollection.findOne({username})
    .then(data => {
        if(!data) return Promise.reject({status: 400, msg: 'Username does not exist'});
    });
}
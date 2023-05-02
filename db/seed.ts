import { db } from "./connection";

const seed = (data: any) => {
    return db.dropCollection('users')
    .then(() => db.dropCollection('posts'))
    .then(() => db.createCollection('users'))
    .then(() => db.createCollection('posts'))
    .then(() => {
    const dbUsers = db.collection('users');
    dbUsers.createIndex({username: 'text'}, {unique: true});
    return dbUsers.insertMany(data.users)
    })
    .then(() => {
        const dbPosts = db.collection('posts');
        return dbPosts.insertMany(data.posts)
    })
    .catch(err => console.log(err))
}

export default seed;

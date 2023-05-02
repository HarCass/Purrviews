import { connection, db } from "./connection";
import * as seedData from "./data/test/index";

const seed = (data: any) => {
    db.dropCollection('users')
    .then(() => db.dropCollection('posts'))
    .then(() => db.createCollection('users'))
    .then(() => db.createCollection('posts'))
    .then(() => {
    const dbUsers = db.collection('users');
    return dbUsers.insertMany(data.users)
    })
    .then(() => {
        const dbPosts = db.collection('posts');
        return dbPosts.insertMany(data.posts)
    })
    .catch(err => console.log(err))
    .finally(() =>connection.close());
}

seed(seedData);

export default seed;

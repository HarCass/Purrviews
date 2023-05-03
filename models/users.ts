import { ObjectId, ReturnDocument } from "mongodb";
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

export const findUserCats = (username: string) => {
    const filter = {
        username: username,
    };

    const projection = {
        cats: 1,
    };

    return collection.findOne(filter, { projection }).then((data) => {
        if (!data) {
            return Promise.reject({ status: 400, msg: "Username does not exist" });
        }
        return data.cats;
    });
};

export const postedCat = (newCat: any, username: string) => {
    return findUserCats(username)
    .then((allCats) => {
       let highestCatId = 0;

       for(const cat of allCats){
        if(cat.cat_id > highestCatId){
            highestCatId = cat.cat_id
        }
       }

       const newCatId = highestCatId + 1;
       newCat.cat_id = newCatId;
    })
    .then(() => {
        return collection.findOneAndUpdate({username: username}, {$push:{cats: newCat }}, {returnDocument: "after"})
    })
    .then(({value}) => { return value!.cats[value!.cats.length - 1]})
}
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


export const findUserCatById = (username: string, cat_id: number) => {
    const filter = {
        'username': username
    }

    const projection = {
        'cats': {'$elemMatch': {'cat_id': cat_id}}
    }

    if (isNaN(cat_id)) return Promise.reject({status: 400, msg: "Invalid cat_id"})

    return collection.findOne(filter, {projection})
    .then(data => {
        if (!data) {
            return Promise.reject({status: 404, msg: "Username does not exist"})
        }
        if (!data.cats) {
            return Promise.reject({status: 404, msg: "Cat does not exist"})
        }
        return data!.cats[0]
    })
}

export const updateCatById = (username: string, cat_id: number, missing: boolean) => {

    const query = { username: username, 'cats.cat_id': cat_id };
    const updateDocument = {
      $set: { "cats.$.missing": missing }
    };

    if (isNaN(cat_id)) return Promise.reject({status: 400, msg: "Invalid cat_id"})

    return collection.findOneAndUpdate(query, updateDocument, {returnDocument : 'after'})
    .then(({value}) => {
        if (!value) {
            return Promise.reject({status: 404, msg: "Cat does not exist"})
        }
       return value!.cats.filter((cat: any) => cat.cat_id === cat_id)[0];
})
};
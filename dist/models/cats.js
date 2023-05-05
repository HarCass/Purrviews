"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMissingCats = void 0;
const connection_1 = require("../db/connection");
const collection = connection_1.db.collection('users');
const findMissingCats = () => {
    const filter = {
        "cats.missing": true
    };
    const projection = {
        'username': 1,
        'cats': { '$elemMatch': { 'missing': true } }
    };
    return collection.find(filter, { projection }).toArray();
};
exports.findMissingCats = findMissingCats;

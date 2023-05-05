"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMissingcats = void 0;
const cats_1 = require("../models/cats");
const getMissingcats = (req, res, next) => {
    return (0, cats_1.findMissingCats)()
        .then(users => res.status(200).send({ users }));
};
exports.getMissingcats = getMissingcats;

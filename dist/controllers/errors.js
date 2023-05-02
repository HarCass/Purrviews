"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbErrors = exports.serverErrors = exports.customErrors = void 0;
const customErrors = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).send({ msg: err.msg });
    }
    else {
        next(err);
    }
};
exports.customErrors = customErrors;
const serverErrors = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({ msg: 'Internal server error' });
};
exports.serverErrors = serverErrors;
const dbErrors = (err, req, res, next) => {
    if (err.code === 11000) {
        res.status(400).send({ msg: 'Username already exists' });
    }
    else if (err.code === 121) {
        res.status(400).send({ msg: 'Invalid format' });
    }
    else {
        next(err);
    }
};
exports.dbErrors = dbErrors;

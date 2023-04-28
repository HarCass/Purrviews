"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customErrors = void 0;
const customErrors = (err, req, res, next) => {
    res.status(err.status).send({ msg: err.msg });
};
exports.customErrors = customErrors;

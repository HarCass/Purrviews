import { ErrorRequestHandler } from "express"

export const customErrors : ErrorRequestHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).send({msg: err.msg});
    } else {
        next(err);
    }
}

export const serverErrors : ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({msg: 'Internal server error'});
}

export const dbErrors : ErrorRequestHandler = (err, req, res, next) => {
    if (err.code === 11000) {
        res.status(400).send({msg: 'Username already exists'});
    } else if (err.code === 121) {
        res.status(400).send({msg: 'Invalid format'});
    } else if (err.code === 14) {
        res.status(400).send({msg: 'Invalid format'});
    } else {
        next(err);
    }
}

import { ErrorRequestHandler } from "express"

export const customErrors : ErrorRequestHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).send({msg: err.msg})
    } else {
        next(err);
    }
}

export const serverErrors : ErrorRequestHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal server error'})
}

export const dbErrors : ErrorRequestHandler = (err, req, res, next) => {
    if (err.code) {
        res.status(400).send({msg: 'Username already exists'})
    } else {
        next(err)
    }
}

// export const dbErrors : ErrorRequestHandler = (err, req, res, next) => {
//     if (err.code) {
//         res.status(400).send({msg: 'Username already exists'})
//     } else {
//         next(err)
//     }
// }
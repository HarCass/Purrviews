import { findUsers, insertUser } from "../models/users"

export const getUsers = (req: any, res: any, next: any) => {
    return findUsers()
    .then(users => res.status(200).send({users}));
}

export const postUser = (req: any, res: any, next: any) => {
    const data = req.body;
    return insertUser(data)
    .then(user => res.status(201).send({user}))
    .catch(next)
}
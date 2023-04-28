import { findUsers } from "../models/users"

export const getUsers = (req: any, res: any, next: any) => {
    return findUsers()
    .then(users => res.status(200).send({users}));
}
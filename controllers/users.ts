import { findUsers, insertUser, findUsersByUsername } from "../models/users";

export const getUsers = (req: any, res: any, next: any) => {
    return findUsers().then((users) => res.status(200).send({ users }));
};

export const postUser = (req: any, res: any, next: any) => {
    const data = req.body;
    return insertUser(data)
        .then((user) => res.status(201).send({ user }))
        .catch(next);
};

export const getUserByUsername = (req: any, res: any, next: any) => {
    const { username } = req.params;
    return findUsersByUsername(username)
        .then((users) => {
                res.status(200).send({ users });
        })
        .catch(next);
};

import { RequestHandler } from "express";
import { findMissingCats } from "../models/cats";

export const getMissingcats: RequestHandler = (req, res, next) => {
    return findMissingCats()
    .then(users => res.status(200).send({users}));
}
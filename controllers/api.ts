import { RequestHandler } from "express";
import fetchEndpoints from "../models/api"

const getEndpoints: RequestHandler = (req, res, next) => {
    const endpoints = fetchEndpoints();
    return res.status(200).send({endpoints});
}

export default getEndpoints;
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI || '';

export const connection = new MongoClient(uri);

export const db = connection.db('test-data');
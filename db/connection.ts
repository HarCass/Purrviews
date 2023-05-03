import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI || '';

const dbName = process.env.NODE_ENV?.trimEnd() || 'dev';

export const connection = new MongoClient(uri);

export const db = connection.db(`${dbName}-data`);
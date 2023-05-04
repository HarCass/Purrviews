import * as testData from './data/test/index';
import * as devData from './data/dev/index';
import dotenv from 'dotenv';
import { connection } from "./connection";
import seed from './seed';

dotenv.config();

interface seedType {
    users: object[],
    posts: object[],
 }

const runSeed = (data: seedType) => {
    seed(data).then(() => connection.close())
}

process.env.NODE_ENV?.trimEnd() === 'test' ? runSeed(testData) : runSeed(devData);
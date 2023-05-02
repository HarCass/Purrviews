import * as testData from './data/test/index';
import { connection } from "./connection";
import seed from './seed';

const runSeed = () => {
    seed(testData).then(() => connection.close())
}

runSeed();
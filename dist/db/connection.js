"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.connection = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.ATLAS_URI || '';
const dbName = ((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trimEnd()) || 'dev';
exports.connection = new mongodb_1.MongoClient(uri);
exports.db = exports.connection.db(`${dbName}-data`);

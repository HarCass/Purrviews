"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cats_1 = require("../controllers/cats");
const catsRouter = express_1.default.Router();
catsRouter.get('/missing', cats_1.getMissingcats);
exports.default = catsRouter;

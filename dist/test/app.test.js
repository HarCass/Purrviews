"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const mocha_1 = require("mocha");
const assert_1 = __importDefault(require("assert"));
const connection_1 = require("../db/connection");
(0, mocha_1.after)(() => connection_1.connection.close());
(0, mocha_1.describe)('Unavailable Endpoint', () => {
    it('404: returns a status 404 and nothing else', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/not_an_endpoint')
            .then(res => assert_1.default.equal(res.status, 404));
    });
});
(0, mocha_1.describe)('GET /api/users', () => {
    it('200: returns an array of all users', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/users')
            .then(res => assert_1.default.equal(res.status, 200));
    });
});

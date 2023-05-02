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
const chai_1 = __importDefault(require("chai"));
const should = chai_1.default.should();
const expect = chai_1.default.expect;
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
            .then(res => {
            assert_1.default.equal(res.status, 200);
            const { users } = res.body;
            assert_1.default.equal(users.length > 0, true);
            users.forEach((user) => {
                should.exist(user);
                user.should.be.an('object');
                user.should.have.keys('_id', 'avatar', 'description', 'username', 'cats');
            });
        });
    });
});
(0, mocha_1.describe)('GET /api/posts', () => {
    it('200: returns an array of all posts', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/posts')
            .then(res => {
            assert_1.default.equal(res.status, 200);
            const { posts } = res.body;
            assert_1.default.equal(posts.length > 0, true);
            posts.forEach((post) => {
                should.exist(post);
                post.should.be.an('object');
                post.should.have.keys('_id', 'img_url', 'posted_at', 'location', 'votes', 'username', 'description', 'lat', 'long');
            });
        });
    });
});

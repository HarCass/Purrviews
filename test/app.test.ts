import request from 'supertest';
import app from '../app';
import { describe, after } from 'mocha';
import assert from 'assert';
import {connection} from '../db/connection';
import chai from 'chai';
const should = chai.should();
const expect = chai.expect;

after(() => connection.close());

describe('Unavailable Endpoint', () => {
    it('404: returns a status 404 and nothing else', () => {
        return request(app)
        .get('/api/not_an_endpoint')
        .then(res => assert.equal(res.status, 404));
    });
});

describe('GET /api/users', () => {
    it('200: returns an array of all users', () => {
        return request(app)
        .get('/api/users')
        .then(res => {
            assert.equal(res.status, 200);
            const {users} = res.body;
            assert.equal(users.length > 0, true);
            users.forEach(({user} : {user:any}) => {
                should.exist(user);
                user.should.be.an('object');
                user.should.have.keys('user_id', 'avatar', 'description', 'username');
            });
                
        });
    });
});

describe('GET /api/posts', () => {
    it('200: returns an array of all posts', () => {
        return request(app)
        .get('/api/posts')
        .then(res => {
            assert.equal(res.status, 200);
            const {posts} = res.body;
            assert.equal(posts.length > 0, true);
            posts.forEach(({post} : {post:any}) => {
                should.exist(post);
                post.should.be.an('object');
                post.should.have.keys('post_id', 'img_url', 'posted_at', 'location', 'votes', 'user_id', 'description', 'lat', 'long');
            });
                
        });
    });
});
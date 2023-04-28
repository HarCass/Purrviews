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
            assert.equal(res.status, 200)
            should.exist(res.body)
            const {users} = res.body;
            users.forEach(({user} : {user:any}) => {
                should.exist(user)
                user.should.be.an('object')
                user.should.have.keys('user_id', 'avatar', 'description', 'username');
            });
                
        });
    });
});
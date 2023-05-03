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
const mongodb_1 = require("mongodb");
const should = chai_1.default.should();
const expect = chai_1.default.expect;
(0, mocha_1.after)(() => connection_1.connection.close());
(0, mocha_1.describe)("Unavailable Endpoint", () => {
    it("404: returns a status 404 and nothing else", () => {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/not_an_endpoint")
            .then((res) => assert_1.default.equal(res.status, 404));
    });
});
(0, mocha_1.describe)("GET /api/users", () => {
    it("200: returns an array of all users", () => {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/users")
            .then((res) => {
            assert_1.default.equal(res.status, 200);
            const { users } = res.body;
            assert_1.default.equal(users.length > 0, true);
            users.forEach((user) => {
                should.exist(user);
                user.should.be.an("object");
                user.should.have.keys("_id", "avatar", "description", "username", "cats");
            });
        });
    });
});
(0, mocha_1.describe)("GET /api/posts", () => {
    it("200: returns an array of all posts", () => {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/posts")
            .then((res) => {
            assert_1.default.equal(res.status, 200);
            const { posts } = res.body;
            assert_1.default.equal(posts.length > 0, true);
            posts.forEach((post) => {
                should.exist(post);
                post.should.be.an("object");
                post.should.have.keys("_id", "img_url", "posted_at", "location", "votes", "username", "description", "lat", "long");
            });
        });
    });
});
(0, mocha_1.describe)("POST /api/users", () => {
    it("201: inserts a user into the database and returns the new user", () => {
        const testUser = {
            username: "Steve1",
            description: "Super cool cat lover",
            avatar: "https://i.pinimg.com/736x/a7/9a/f3/a79af309957138af9ef7696b261b71fe.jp…",
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(testUser)
            .then((res) => {
            assert_1.default.equal(res.status, 201);
            const { user } = res.body;
            should.exist(user);
            user.should.be.an("object");
            user.should.have.keys("_id", "cats", "avatar", "description", "username");
        });
    });
    it("400: returns a bad request if data format is wrong", () => {
        const testUser = {
            description: "Super cool cat lover",
            avatar: "https://i.pinimg.com/736x/a7/9a/f3/a79af309957138af9ef7696b261b71fe.jp…",
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(testUser)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
    it("400: returns a bad request if username already exists", () => {
        const testUser = {
            username: "Steve1",
            description: "Super cool cat lover",
            avatar: "https://i.pinimg.com/736x/a7/9a/f3/a79af309957138af9ef7696b261b71fe.jp…",
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(testUser)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Username already exists");
        });
    });
});
(0, mocha_1.describe)("POST /api/posts", () => {
    it("201: inserts a post into the database and returns the new post", () => {
        const newPost = {
            img_url: "https://i.ytimg.com/vi/da1E9rVKPMA/maxresdefault.jpg",
            location: "London, UK",
            username: "Ellie123",
            description: "Is this a cat?",
            lat: 51.5072,
            long: 0.1276,
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/posts")
            .send(newPost)
            .then((res) => {
            assert_1.default.equal(res.status, 201);
            const { post } = res.body;
            should.exist(post);
            post.should.be.an("object");
            post.should.have.keys("_id", "img_url", "location", "username", "description", "lat", "long", "votes", "posted_at");
        });
    });
    it("400: returns a bad request if data format is wrong", () => {
        const newPost = {
            location: "London, UK",
            username: "Ellie123",
            description: "Is this a cat?",
            lat: 51.5072,
            long: 0.1276,
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/posts")
            .send(newPost)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
    it("404: returns a bad request if the username does not exist", () => {
        const newPost = {
            img_url: "https://i.ytimg.com/vi/da1E9rVKPMA/maxresdefault.jpg",
            location: "London, UK",
            username: "Not_a_User",
            description: "Is this a cat?",
            lat: 51.5072,
            long: 0.1276,
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/posts")
            .send(newPost)
            .then((res) => {
            assert_1.default.equal(res.status, 404);
            assert_1.default.equal(res.body.msg, "Username does not exist");
        });
    });
});
(0, mocha_1.describe)("GET /api/posts/:post_id", () => {
    it("200: returns post by post_id", () => {
        return connection_1.db
            .collection("posts")
            .findOne()
            .then((data) => {
            return (0, supertest_1.default)(app_1.default)
                .get(`/api/posts/${data._id}`)
                .then((res) => {
                assert_1.default.equal(res.status, 200);
                const { post } = res.body;
                should.exist(post);
                post.should.be.an("object");
                post.should.have.keys("_id", "img_url", "location", "username", "description", "lat", "long", "votes", "posted_at");
                assert_1.default.equal(post._id, data._id);
            });
        });
    });
    it("400: returns bad request if the post_id is invalid", () => {
        return (0, supertest_1.default)(app_1.default)
            .get(`/api/posts/not_a_post`)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid id");
        });
    });
    it("400: returns bad request if the post_id does not exist", () => {
        return (0, supertest_1.default)(app_1.default)
            .get(`/api/posts/${new mongodb_1.ObjectId()}`)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Post does not exist");
        });
    });
});
(0, mocha_1.describe)('GET /api/users/:username/cats', () => {
    it('200: returns an array of cat objects', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/users/Scott687/cats')
            .then(res => {
            assert_1.default.equal(res.status, 200);
            const { cats } = res.body;
            assert_1.default.equal(cats.length > 0, true);
            cats.forEach((cat) => {
                should.exist(cat);
                cat.should.be.an('object');
                cat.should.have.keys('cat_id', 'cat_name', 'age', 'breed', 'characteristics', 'cat_img', 'missing');
            });
        });
    });
    it('400: returns a bad request if username is invalid', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/users/Steve123/cats')
            .then(res => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Username does not exist");
        });
    });
});
(0, mocha_1.describe)("GET /api/users/:username", () => {
    it("200: returns a user by username", () => {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/users/Scott687")
            .then((res) => {
            assert_1.default.equal(res.status, 200);
            const { users } = res.body;
            should.exist(users);
            users.should.be.an("object");
            users.should.have.keys("_id", "avatar", "description", "username", "cats");
            expect(users.username).to.equal("Scott687");
            expect(users.avatar).to.equal("https://i2-prod.dailystar.co.uk/incoming/article20472638.ece/ALTERNATES/s1227b/httpscdnimagesdailystarcoukdynamic122photos791000900x738434791");
        });
    });
    it("404: returns a status 404 and a message of username doesnt exist", () => {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/users/not_a_username")
            .then((res) => {
            assert_1.default.equal(res.status, 404), assert_1.default.equal(res.body.msg, "Username doesn't exist");
        });
    });
});
(0, mocha_1.describe)('PATCH /api/posts/:post_id', () => {
    it('200: updates the specififed posts votes and returns the new post', () => {
        const newVotes = {
            inc_votes: -1
        };
        return connection_1.db
            .collection("posts")
            .findOne()
            .then(data => {
            return (0, supertest_1.default)(app_1.default)
                .patch(`/api/posts/${data._id}`)
                .send(newVotes)
                .then(res => {
                assert_1.default.equal(res.status, 200);
                const { post } = res.body;
                should.exist(post);
                post.should.be.an('object');
                post.should.have.keys("_id", "img_url", "location", "username", "description", "lat", "long", "votes", "posted_at");
                assert_1.default.equal(post._id, data._id);
                assert_1.default.equal(post.votes, data.votes - 1);
            });
        });
    });
    it("400: returns bad request if the post_id is invalid", () => {
        const newVotes = {
            inc_votes: -1
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/posts/not_a_post`)
            .send(newVotes)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid id");
        });
    });
    it("400: returns bad request if the post_id does not exist", () => {
        const newVotes = {
            inc_votes: -1
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/posts/${new mongodb_1.ObjectId()}`)
            .send(newVotes)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Post does not exist");
        });
    });
    it("400: returns bad request if inc_votes does not exist on request", () => {
        const newVotes = {};
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/posts/${new mongodb_1.ObjectId()}`)
            .send(newVotes)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
    it("400: returns bad request if the inc_votes value is not a number", () => {
        const newVotes = {
            inc_votes: 'not_a_number'
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/posts/${new mongodb_1.ObjectId()}`)
            .send(newVotes)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
});
(0, mocha_1.describe)("DELETE /api/users/:username", () => {
    it("204: Deletes a user by their username", () => {
        return (0, supertest_1.default)(app_1.default)
            .delete("/api/users/Harry111")
            .expect(204);
    });
    it("404: username not found", () => {
        return (0, supertest_1.default)(app_1.default)
            .delete("/api/users/iamadog")
            .expect(404)
            .then(({ body }) => {
            expect(body.msg).to.equal("Username doesn't exist");
        });
    });
});
(0, mocha_1.describe)("DELETE /api/posts/:post_id", () => {
    it("204: Deletes a post by its post_id", () => {
        return connection_1.db
            .collection("posts")
            .findOne()
            .then((data) => {
            return (0, supertest_1.default)(app_1.default)
                .delete(`/api/posts/${data._id}`)
                .expect(204);
        });
    });
    it("404: Post not found", () => {
        return (0, supertest_1.default)(app_1.default)
            .delete("/api/posts/645137bef81a9c03007ca79d")
            .expect(404)
            .then(({ body }) => {
            expect(body.msg).to.equal("Post doesn't exist");
        });
    });
    it("400: Invalid Post Id", () => {
        return (0, supertest_1.default)(app_1.default)
            .delete("/api/posts/645137bef8")
            .expect(400)
            .then(({ body }) => {
            const invalidId = '645137bef8';
            const isValidId = mongodb_1.ObjectId.isValid(invalidId);
            assert_1.default.strictEqual(isValidId, false);
            expect(body.msg).to.equal("Invalid Post Id");
        });
    });
});
(0, mocha_1.describe)('GET /api/users/:username/cats/:cat_id', () => {
    it('200: returns a cat object', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/users/Scott687/cats/1')
            .then(res => {
            assert_1.default.equal(res.status, 200);
            const { cat } = res.body;
            assert_1.default.equal(cat.cat_id, 1);
            should.exist(cat);
            cat.should.be.an('object');
            cat.should.have.keys('cat_id', 'cat_name', 'age', 'breed', 'characteristics', 'cat_img', 'missing');
        });
    });
    it('404: returns a bad request if username is invalid', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/users/Steve123/cats/1')
            .then(res => {
            assert_1.default.equal(res.status, 404);
            assert_1.default.equal(res.body.msg, "Username does not exist");
        });
    });
    it('400: returns a bad request if cat_id is invalid', () => {
        return (0, supertest_1.default)(app_1.default)
            .get('/api/users/Scott687/cats/not_an_id')
            .then(res => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid cat_id");
        });
    });
    it("404: returns a status 404 and a message if cat_id doesnt exist", () => {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/users/Scott687/cats/999")
            .then((res) => {
            assert_1.default.equal(res.status, 404), assert_1.default.equal(res.body.msg, "Cat does not exist");
        });
    });
});
(0, mocha_1.describe)('DELETE /api/users/:username/cats/:cat_id', () => {
    it('204: returns no content and deletes the cat', () => {
        return (0, supertest_1.default)(app_1.default)
            .delete('/api/users/Scott687/cats/1')
            .then(res => {
            expect(res.status).to.equal(204);
        });
    });
    it('404: returns a not found for a non existant username', () => {
        return (0, supertest_1.default)(app_1.default)
            .delete('/api/users/not_a_user/cats/1')
            .then(res => {
            expect(res.status).to.equal(404);
            expect(res.body.msg).to.equal('Username does not exist');
        });
    });
    it('400: returns a bad request for an invalid cat_id', () => {
        return (0, supertest_1.default)(app_1.default)
            .delete('/api/users/Scott687/cats/not_an_id')
            .then(res => {
            expect(res.status).to.equal(400);
            expect(res.body.msg).to.equal('Invalid cat_id');
        });
    });
    it('404: returns a not found for a non existant cat_id', () => {
        return (0, supertest_1.default)(app_1.default)
            .delete('/api/users/Scott687/cats/99999')
            .then(res => {
            expect(res.status).to.equal(404);
            expect(res.body.msg).to.equal('Cat not found');
        });
    });
});
(0, mocha_1.describe)('PATCH /api/users/:username/cats/:cat_id', () => {
    it('200: updates the specififed cats missing value and returns the new cat', () => {
        const newMissing = {
            missing: true
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/users/James456/cats/1`)
            .send(newMissing)
            .then(res => {
            assert_1.default.equal(res.status, 200);
            const { cat } = res.body;
            should.exist(cat);
            cat.should.be.an('object');
            cat.should.have.keys("cat_id", "cat_name", "breed", "age", "characteristics", "cat_img", "missing");
            assert_1.default.equal(cat.cat_id, 1);
            assert_1.default.equal(cat.missing, true);
        });
    });
    it("404: returns bad request if the username does not exist", () => {
        const newMissing = {
            missing: true
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/users/Steve123/cats/1`)
            .send(newMissing)
            .then((res) => {
            assert_1.default.equal(res.status, 404);
            assert_1.default.equal(res.body.msg, "Username does not exist");
        });
    });
    it("404: returns bad request if the cat_id does not exist", () => {
        const newMissing = {
            missing: true
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/users/Scott687/cats/999`)
            .send(newMissing)
            .then((res) => {
            assert_1.default.equal(res.status, 404);
            assert_1.default.equal(res.body.msg, "Cat does not exist");
        });
    });
    it("400: returns bad request if the cat_id is invalid", () => {
        const newMissing = {
            missing: true
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/users/Scott687/cats/not_an_id`)
            .send(newMissing)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid cat_id");
        });
    });
    it('400: returns bad request if request body does not have missing property', () => {
        const newMissing = {};
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/users/James456/cats/1`)
            .send(newMissing)
            .then(res => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
    it('400: returns bad request if request body has invalid missing value', () => {
        const newMissing = {
            missing: 'hello'
        };
        return (0, supertest_1.default)(app_1.default)
            .patch(`/api/users/James456/cats/1`)
            .send(newMissing)
            .then(res => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
});
(0, mocha_1.describe)("POSTS /api/users/:username/cats", () => {
    it("201: inserts a cat into the database and returns the new cat", () => {
        const newCat = {
            cat_name: "Tabby",
            age: 1,
            breed: "Maine Coon",
            characteristics: [
                "curious",
                "friendly"
            ],
            cat_img: "https://image.slidesharecdn.com/downloadfunnycatvideos-150906143836-lva1-app6891/85/download-funny-cat-videos-1-320.jpg?cb=1665607875",
            missing: false
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/users/Scott687/cats")
            .send(newCat)
            .then((res) => {
            assert_1.default.equal(res.status, 201);
            const { cat } = res.body;
            should.exist(cat);
            cat.should.be.an("object");
            cat.should.have.keys("cat_id", "cat_img", "age", "breed", "cat_name", "characteristics", "missing");
        });
    });
    it("400: returns a bad request if data format is wrong", () => {
        const newCat = {
            cat_name: "Tabby",
            age: 1,
            breed: "Maine Coon",
            cat_img: "https://image.slidesharecdn.com/downloadfunnycatvideos-150906143836-lva1-app6891/85/download-funny-cat-videos-1-320.jpg?cb=1665607875",
            missing: false
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/users/Scott687/cats")
            .send(newCat)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Invalid format");
        });
    });
    it("400: returns a bad request if the username does not exist", () => {
        const newCat = {
            cat_name: "Tabby",
            age: 1,
            breed: "Maine Coon",
            characteristics: [
                "curious",
                "friendly"
            ],
            cat_img: "https://image.slidesharecdn.com/downloadfunnycatvideos-150906143836-lva1-app6891/85/download-funny-cat-videos-1-320.jpg?cb=1665607875",
            missing: false
        };
        return (0, supertest_1.default)(app_1.default)
            .post("/api/users/invaliduser/cats")
            .send(newCat)
            .then((res) => {
            assert_1.default.equal(res.status, 400);
            assert_1.default.equal(res.body.msg, "Username does not exist");
        });
    });
});

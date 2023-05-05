const endpoints = {
    "GET /api": {
      "description": "serves up a json representation of all the available endpoints of the api"
    },
    "GET /api/posts": {
        "description": "serves an array of all posts",
        "exampleResponse": [{
          "post":{
            "_id": "6453de28a5c325f2e1b6fe45",
            "description": "Some post",
            "img_url": "https://someurl.com",
            "username": "Legolad",
            "votes": 15,
            "posted_at": "2022-05-02T16:30:00.000Z",
            "location": "London",
            "lat": 51.50,
            "long": 0.23
            }
        }]
      },
      "POST /api/posts": {
        "description": "adds a new post",
        "data_format": {
            "img_url": "https://i.ytimg.com/vi/da1E9rVKPMA/maxresdefault.jpg",
            "location": "London",
            "username": "Legolad",
            "description": "Some post",
            "lat": 51.50,
            "long": 0.23
        },
        "exampleResponse": {
          "post":{
            "_id": "6453de28a5c325f2e1b6fe45",
            "description": "Some post",
            "img_url": "https://someurl.com",
            "username": "Legolad",
            "votes": 0,
            "posted_at": "2022-05-02T16:30:00.000Z",
            "location": "London",
            "lat": 51.50,
            "long": 0.23
            }
        }
      },
    "GET /api/posts/post_id": {
      "description": "serves the specific post",
      "exampleResponse": {
        "post":{
          "post_id": "6453de28a5c325f2e1b6fe45",
          "description": "Some post",
          "img_url": "https://someurl.com",
          "username": "Legolad",
          "votes": 15,
          "posted_at": "2022-05-02T16:30:00.000Z",
          "location": "London",
          "lat": 51.50,
          "long": 0.23
          }
      }
    },
    "PATCH /api/posts/post_id": {
      "description": "updates the votes of a specified post by the amount given, which must be an integer",
      "data_format": {"inc_votes": 10},
      "exampleResponse": {
        "post":{
          "_id": "6453de28a5c325f2e1b6fe45",
          "description": "Some post",
          "img_url": "https://someurl.com",
          "username": "Legolad",
          "votes": 15,
          "posted_at": "2022-05-02T16:30:00.000Z",
          "location": "London",
          "lat": 51.50,
          "long": 0.23
          }
      }
    },
    "DELETE /api/posts/post_id": {
      "description": "removes the specified post",
      "exampleResponse": {}
    },
    "GET /api/users": {
      "description": "serves an array of all users",
      "exampleResponse": {
        "users": [
        {
        "_id": "6453de28a5c325f2e1b6fe45",
        "username": "Legolad",
        "avatar": "https://someurl.com",
        "description": "something",
        "cats": [{"cat_id": 1, "name": "mittens", "etc": "..."}]
        }
      ]
      }
    },
    "POST /api/users": {
      "description": "adds a new user",
      "data_format" : {
        "username": "Legolad",
        "avatar": "https://someurl.com",
        "description": "something"
        },
      "exampleResponse": {
        "user": {
        "_id": "6453de28a5c325f2e1b6fe45",
        "username": "Legolad",
        "avatar": "https://someurl.com",
        "description": "something",
        "cats": []
        }
      }
    },
    "GET /api/users/:username": {
      "description": "serves specified user",
      "exampleResponse": {
        "user":{
        "_id": "6453de28a5c325f2e1b6fe45",
        "username": "Legolad",
        "avatar": "https://someurl.com",
        "description": "something",
        "cats": [{"cat_id": 1, "name": "mittens", "etc": "..."}]
        }
      }
    },
    "DELETE /api/users/:username": {
      "description": "deletes the specified user",
      "exampleResponse": {}
    },
    "GET /api/users/:username/cats": {
        "description": "serves an array of all a users cats",
        "exampleResponse": {
            "cats": [
                {
                "cat_id": 1,
                "cat_name": "Fluffy",
                "age": 3,
                "breed": "Persian",
                "characteristics": [
                    "long hair",
                    "blue eyes",
                    "affectionate"
                ],
                "cat_img": "https://someurl.com",
                "missing": false
                }
            ]
        }
    },
    "POST /api/users/:username/cats": {
        "description": "adds a new cat to a user",
        "data_format" : {
            "cat_name": "Fluffy",
            "age": 3,
            "breed": "Persian",
            "characteristics": [
                "long hair",
                "blue eyes",
                "affectionate"
            ],
            "cat_img": "https://someurl.com",
            "missing": false
        },
        "exampleResponse": {
            "cat": {
                "cat_id": 1,
                "cat_name": "Fluffy",
                "age": 3,
                "breed": "Persian",
                "characteristics": [
                    "long hair",
                    "blue eyes",
                    "affectionate"
                ],
                "cat_img": "https://someurl.com",
                "missing": false
            }
        }
    },
    "GET /api/users/:username/cats/cat_id": {
        "description": "serves an array of the specified cat of a user",
        "exampleResponse": {
            "cat": {
                "cat_id": 1,
                "cat_name": "Fluffy",
                "age": 3,
                "breed": "Persian",
                "characteristics": [
                    "long hair",
                    "blue eyes",
                    "affectionate"
                ],
                "cat_img": "https://someurl.com",
                "missing": false
            }
        }
    },
    "PATCH /api/users/:username/cats/cat_id": {
        "description": "updates the missing property of a users cat",
        "data_format" : {
            "missing": true
        },
        "exampleResponse": {
            "cat": {
                "cat_id": 1,
                "cat_name": "Fluffy",
                "age": 3,
                "breed": "Persian",
                "characteristics": [
                    "long hair",
                    "blue eyes",
                    "affectionate"
                ],
                "cat_img": "https://someurl.com",
                "missing": true
            }
        }
    },
    "DELETE /api/users/:username/cats/cat_id": {
        "description": "deletes the specified cat from the users cats",
        "exampleResponse": {}
    },
    "GET /api/cats/missing": {
      "description": "serves an array of all users missing cats",
      "exampleResponse": {
          "users": [
            {
            "_id": "6453de28a5c325f2e1b6fe45",
            "username": "Legolad",
            "cats": [{"cat_id": 1, "name": "mittens", "etc": "...", "missing": true}]
            }
          ]
      }
    }
  }

  export default endpoints;
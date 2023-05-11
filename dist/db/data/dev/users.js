"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        "username": "Harry111",
        "description": "I like maps and cats",
        "avatar": "https://media.istockphoto.com/id/1281620692/photo/gray-tabby-cat-lays-on-the-neck-of-a-young-man-close-up.jpg?s=612x612&w=0&k=20&c=N7FeUErVJf91pY1U6pYtZJycQAriycxhiC2y4wxoY_w=",
        "cats": []
    },
    {
        "username": "James456",
        "description": "Cats are life",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_vNhtyUMbEu6lN-P12kKr7HMyxepGB8Okw&usqp=CAU",
        "cats": [
            {
                "cat_id": 1,
                "cat_name": "Mittens",
                "age": 1,
                "breed": "Maine Coon",
                "characteristics": [
                    "curious",
                    "friendly"
                ],
                "cat_img": "https://image.slidesharecdn.com/downloadfunnycatvideos-150906143836-lva1-app6891/85/download-funny-cat-videos-1-320.jpg?cb=1665607875",
                "missing": false
            }
        ]
    },
    {
        "username": "Scott687",
        "description": "Cattu in a socku",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDBr1on3ktPfOI4MuQFDO50oofVHRT4BSeA&usqp=CAU",
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
                "cat_img": "https://pbs.twimg.com/profile_images/1311008414156423170/Kxu_7mQS_400x400.jpg",
                "missing": false
            },
            {
                "cat_id": 2,
                "cat_name": "Tigger",
                "age": 2,
                "breed": "Bengal",
                "characteristics": [
                    "playful",
                    "energetic",
                    "likes water"
                ],
                "cat_img": "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1020%2C1020&ssl=1",
                "missing": true
            }
        ]
    },
    {
        "username": "Elena123",
        "description": "Super cool cat lover",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjGV24443WikhuxHJarvuA60ykxdxGavbaQ&usqp=CAU",
        "cats": [
            {
                "cat_id": 1,
                "cat_name": "Whiskers",
                "age": 2,
                "breed": "Siamese",
                "characteristics": [
                    "playful",
                    "affectionate"
                ],
                "cat_img": "https://static.wikia.nocookie.net/fine-dining-extended-universe/images/8/8c/Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg/revision/latest?cb=20191120000230",
                "missing": false
            }
        ]
    },
    {
        "avatar": "https://media.istockphoto.com/id/1198100351/photo/portrait-of-beautiful-and-fluffy-tri-colored-tabby-cat-at-home-natural-light.jpg?s=612x612&w=0&k=20&c=4p4gjq48aYnD9jNQf9yazpGCpn620btJ5H8VJX3OElo=",
        "description": "I like bald cats",
        "username": "Eeevee18",
        "cats": [
            {
                "cat_id": 1,
                "cat_name": "Smokey",
                "age": 4,
                "breed": "British Shorthair",
                "characteristics": [
                    "lazy",
                    "calm"
                ],
                "cat_img": "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-3.jpg",
                "missing": true
            }
        ]
    },
    {
        "username": "Emma123",
        "description": "Cat mom of 3 fur babies",
        "avatar": "https://media.istockphoto.com/id/1170733516/photo/kitten-and-the-owner.jpg?b=1&s=170667a&w=0&k=20&c=IbJP_ZkjigFQNS28bU48ZofbDtlXv6xsQA941xVwboI=",
        "cats": [
            {
                "cat_id": 1,
                "cat_name": "Simba",
                "age": 3,
                "breed": "Bengal",
                "characteristics": [
                    "energetic",
                    "playful",
                    "talkative"
                ],
                "cat_img": "https://images.unsplash.com/photo-1603277160434-df7471138363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                "missing": false
            },
            {
                "cat_id": 2,
                "cat_name": "Whiskers",
                "age": 2,
                "breed": "British Shorthair",
                "characteristics": [
                    "lazy",
                    "affectionate"
                ],
                "cat_img": "https://images.unsplash.com/photo-1524642603405-a7c76bcde7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "missing": true
            },
            {
                "cat_id": 3,
                "cat_name": "Luna",
                "age": 1,
                "breed": "Siamese",
                "characteristics": [
                    "sassy",
                    "independent"
                ],
                "cat_img": "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
                "missing": false
            }
        ]
    }
];
exports.default = users;

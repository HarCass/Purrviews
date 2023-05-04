"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts = [
    {
        "img_url": "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "posted_at": "2022-05-02T16:30:00.000Z",
        "location": "London",
        "votes": 8,
        "username": "Harry111",
        "description": "This fluffy cat was sitting outside my apartment building today!",
        "lat": 51.5074,
        "long": -0.1278
    },
    {
        "img_url": "https://images.unsplash.com/photo-1601373879104-b4290a56b691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80",
        "posted_at": "2022-04-29T09:45:00.000Z",
        "location": "Manchester",
        "votes": 6,
        "username": "James456",
        "description": "Met this little cutie while out for a walk in the park!",
        "lat": 53.4808,
        "long": -2.2426
    },
    {
        "img_url": "https://images.unsplash.com/photo-1645437136523-dd412d06a79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
        "posted_at": "2022-04-25T14:00:00.000Z",
        "location": "Birmingham",
        "votes": 3,
        "username": "Scott687",
        "description": "This cat was waiting for me when I got home today!",
        "lat": 52.4862,
        "long": -1.8904
    },
    {
        "img_url": "https://images.unsplash.com/photo-1647928531189-59609d143cf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        "posted_at": "2022-04-20T11:15:00.000Z",
        "location": "Liverpool",
        "votes": 12,
        "username": "Elena123",
        "description": "This friendly cat followed me for a while on my walk this morning!",
        "lat": 53.4084,
        "long": -2.9916
    },
    {
        "img_url": "https://images.unsplash.com/photo-1505503076934-b9b847ee95ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "posted_at": "2022-04-16T17:20:00.000Z",
        "location": "Leeds",
        "votes": 9,
        "username": "Eeevee18",
        "description": "Found this little guy napping in a sunny spot!",
        "lat": 53.8008,
        "long": -1.5491
    },
    {
        "img_url": "https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "posted_at": "2022-04-12T12:10:00.000Z",
        "location": "Sheffield",
        "votes": 4,
        "username": "Emma123",
        "description": "This kitty was hanging out in the flower bed in my front yard!",
        "lat": 53.3811,
        "long": -1.4701
    },
    {
        "img_url": "https://images.unsplash.com/photo-1651590733106-3147aea068b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "posted_at": "2023-04-30T09:15:00.000Z",
        "location": "Paris",
        "votes": 23,
        "username": "James456",
        "description": "I found this little kitty sleeping in the sun on a park bench. So precious!",
        "lat": 48.8566,
        "long": 2.3522
    },
    {
        "img_url": "https://images.unsplash.com/photo-1636207515928-ec32da6f93d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        "posted_at": "2023-04-28T18:30:00.000Z",
        "location": "New York City",
        "votes": 15,
        "username": "Scott687",
        "description": "I spotted this little cutie hiding under a car. Had to snap a pic!",
        "lat": 40.7128,
        "long": -74.0060
    },
    {
        "img_url": "https://images.unsplash.com/photo-1671647434852-452070d208cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "posted_at": "2023-04-27T16:45:00.000Z",
        "location": "Tokyo",
        "votes": 8,
        "username": "Harry111",
        "description": "This little guy was meowing outside my window this morning. Had to give him some love!",
        "lat": 35.6762,
        "long": 139.6503
    },
    {
        "img_url": "https://images.unsplash.com/photo-1655978311712-b7e9eb9636eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
        "posted_at": "2023-04-26T07:20:00.000Z",
        "location": "Amsterdam",
        "votes": 12,
        "username": "Elena123",
        "description": "This kitty was taking a nap in the tulips. So precious!",
        "lat": 52.3702,
        "long": 4.8952
    },
];
exports.default = posts;

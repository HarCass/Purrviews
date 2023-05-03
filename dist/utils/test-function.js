"use strict";
const cats = [{
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
    }, {
        "cat_id": 10,
        "cat_name": "Mittens",
        "age": 1,
        "breed": "Maine Coon",
        "characteristics": [
            "curious",
            "friendly"
        ],
        "cat_img": "https://image.slidesharecdn.com/downloadfunnycatvideos-150906143836-lva1-app6891/85/download-funny-cat-videos-1-320.jpg?cb=1665607875",
        "missing": false
    }];
const highestCatId = cats.reduce((prev, current) => {
    return (prev.cat_id > current.cat_id) ? prev : current;
});
const newCatId = highestCatId.cat_id + 1;
const newCat = {
    "cat_id": newCatId,
    "cat_name": "Whiskers",
    "age": 2,
    "breed": "Siamese",
    "characteristics": [
        "playful",
        "affectionate"
    ],
    "cat_img": "https://www.example.com/cat.jpg",
    "missing": false
};
cats.push(newCat);
console.log(cats);

import { findPosts } from "../models/posts"

export const getPosts = (req: any, res: any, next: any) => {
    return findPosts()
    .then(posts => res.status(200).send({posts}));
}
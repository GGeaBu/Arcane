import { Comment, Post } from "../model/schema.js";

export async function findByID(id) {
    return Post.findOne({ _id: id });
}

export async function findAllPost() {
    return Post.find();
}

export async function createPost(post) {
    return new Post(post) //
        .save()
        .then((data) => data)
        .catch((err) => console.log(err));
}

export async function updatePost(id, newview) {
    const filter = { _id: id };
    const update = { view: newview };
    await Post.findOneAndUpdate(filter, update);
}

export async function deleteAll() {
    await Post.deleteMany({ postnum: 1 });
}

export async function commentPost(comment, comment_id) {
    const new_comment = await new Comment(comment)
        .save()
        .then((data) => data)
        .catch((e) => console.error(e));

    const post = await Post.findOne({ _id: comment_id });
    await post.comment.push(new_comment);
    await post.save();
}

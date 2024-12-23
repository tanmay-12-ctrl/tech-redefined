import mongoose, { Schema } from "mongoose";

export interface postDocument{
    title: string;
    content: string;
    image : string;
    likeCount : number;
}

const PostSchema = new Schema<postDocument>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String, required: true},
    likeCount: {type: Number, default: 0}
})

export const Post = mongoose.model("Post",PostSchema)
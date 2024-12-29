import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./userSchema";

export interface postDocument{
    title: string;
    content: string;
    image : string;
    likeCount : number;
    owner : UserDocument
}

const PostSchema = new Schema<postDocument>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String, required: true},
    likeCount: {type: Number, default: 0},
    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export const Post = mongoose.model("Post",PostSchema)
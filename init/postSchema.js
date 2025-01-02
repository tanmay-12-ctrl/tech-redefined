const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

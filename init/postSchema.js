const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Post Schema
const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  category: { 
    type: String,
    enum: ["Dresses", "Outwear", "Footwear", "Tops", "Bottomwear", "Accessories"], // Valid categories
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User collection
    required: true,
  },
});

// Create the Post model
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

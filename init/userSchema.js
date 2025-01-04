const mongoose = require("mongoose");

// Define the schema for a User
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profilePhoto: {
    type: String,
    default: "",
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

// Create the User model
const User = mongoose.model("User", UserSchema);

module.exports = User;

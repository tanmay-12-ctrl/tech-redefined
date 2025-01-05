const mongoose = require("mongoose");
const Post = require("./postSchema"); // assuming you have Post model
const User = require("./userSchema"); // assuming you have User model

// Function to update Post and link Image _id
const Mong_Url_Local = "mongodb://localhost:27017/Zashion"
const Mongo_Url ="mongodb+srv://abhinavsmile7:Yiv2jFJkDp15ZkLl@cluster0.hore4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function linkImageToPost() {
  try {
    await mongoose.connect(Mongo_Url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connected to the database");

    const posts = await Post.find({});
    
    for (let post of posts) {      
        const user = await User.findById(post.owner); // Assuming the owner is stored as an ObjectId
        if (user) {
          user.posts.push(post._id); // Add the post ID to the user's posts array
          await user.save();
        }
      }
      console.log("Posts and Users updated successfully.");
    }
  catch (error) {
    console.error("Error updating posts and users:", error);
  }
}

// Execute the function
linkImageToPost();

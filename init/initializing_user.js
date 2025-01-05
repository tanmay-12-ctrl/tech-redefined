const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./userSchema"); // Adjust path to your UserSchema file

// Replace with your MongoDB connection string
const Mong_Url_Local = "mongodb://localhost:27017/Zashion"

const Mong_Url_cloud="mongodb+srv://abhinavsmile7:Yiv2jFJkDp15ZkLl@cluster0.hore4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// User data
const users = [
  {
    username: "john_doe",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Travel enthusiast and adventure seeker.",
    email: "john.doe@example.com",
    password: "securepassword123",
    posts: ["64f77970fae3b0ed76f8b123", "64f77970fae3b0ed76f8b124"], // Replace with valid Post ObjectIds
  },
  {
    username: "jane_smith",
    profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Food blogger sharing delicious recipes and dining tips.",
    email: "jane.smith@example.com",
    password: "securepassword456",
    posts: ["64f77970fae3b0ed76f8b125", "64f77970fae3b0ed76f8b126"],
  },
  {
    username: "traveler_tim",
    profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Exploring the world, one city at a time.",
    email: "tim.traveler@example.com",
    password: "securepassword789",
    posts: ["64f77970fae3b0ed76f8b127"],
  },
  {
    username: "nature_lover",
    profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Capturing the beauty of nature through my lens.",
    email: "nature.lover@example.com",
    password: "securepassword012",
    posts: ["64f77970fae3b0ed76f8b128", "64f77970fae3b0ed76f8b129"],
  },
  {
    username: "tech_guru",
    profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Tech enthusiast, coder, and gadget reviewer.",
    email: "tech.guru@example.com",
    password: "securepassword345",
    posts: [],
  },
];

// Connect to MongoDB and insert users with hashed passwords
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(Mong_Url_cloud, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");

    // Clear existing data (optional)
    await User.deleteMany({});
    console.log("Existing users cleared");

    // Hash passwords and insert users
    for (const userData of users) {
      const salt = await bcrypt.genSalt(5);
      const hashedPassword = await bcrypt.hash(userData.password, salt);

      // Create a new user with hashed password
      await User.create({
        username: userData.username,
        profilePhoto: userData.profilePhoto,
        description: userData.description,
        email: userData.email,
        password: hashedPassword,
        posts: userData.posts,
      });
    }
    console.log("User data inserted successfully");

    // Disconnect from the database
    await mongoose.disconnect();
    console.log("Disconnected from the database");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
}

// Run the script
seedDatabase();

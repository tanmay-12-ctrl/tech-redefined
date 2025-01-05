const mongoose = require("mongoose");
const Post = require("./postSchema.js");
const initData = require("./daata2.js");
const dotenv = require("dotenv")
dotenv.config();

const Mongo_Url ="mongodb+srv://abhinavsmile7:Yiv2jFJkDp15ZkLl@cluster0.hore4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Mong_Url_Local = "mongodb://localhost:27017/Zashion"

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(Mongo_Url);
}

const initDb = async ()=>{
    await Post.deleteMany();
//     initData.data = initData.data.map((obj) =>({ 
        
//         ...obj,
//         owner : "677128ab248b37d631c8e8b4",
//     }
// ));
    await Post.insertMany(initData.data);
    // console.log(initData.data);
    console.log("data intialised succefully : ");
}

initDb();
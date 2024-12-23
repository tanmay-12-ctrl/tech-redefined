import express from "express"
import mongoose from "mongoose";
import userRouter from "./router/userRouter";
import postRouter from "./router/postRouter";
const app = express()
import dotenv from "dotenv"
dotenv.config();


mongoose.connect(process.env.DB_URL as string).then(()=>{
    console.log("Connected to the database")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())

app.get("/",()=>{
    console.log("Hello from express")
})

app.use("/",userRouter)
app.use("/post",postRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port", process.env.PORT)
})


export default app
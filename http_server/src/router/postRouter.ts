import express from "express";
import { userMiddleware } from "../middleware/middleware";
import { createNewPost, deletePost, showAllPost, showSpecificPost, updatePost } from "../controllers/postController";

const postRouter = express.Router();

postRouter.get("/",showAllPost)

postRouter.post("/new",userMiddleware,createNewPost)

postRouter.get("/:id",showSpecificPost)

postRouter.put("/:id",userMiddleware,updatePost)

postRouter.delete("/:id",userMiddleware,deletePost)

export default postRouter
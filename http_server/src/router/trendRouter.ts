import express from "express";
import { userMiddleware } from "../middleware/middleware";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/messageController.js";
import { getTrends } from "../controllers/trendsController";

const trendsRouter = express.Router();

trendsRouter.get("/", userMiddleware, getTrends);

export default trendsRouter;

import express from "express";
import { signupUser, loginUser, getProfile } from "../controllers/userController";
import { userMiddleware } from "../middleware/middleware";

const userRouter = express.Router();

// Register route
userRouter.post('/signup', signupUser);

// Login route
userRouter.post('/login', loginUser);

// Profile route
userRouter.get('/dashboard',userMiddleware, getProfile);

// Export the router
export default userRouter;
import {User} from "../modals/userSchema"
import {userSchemaValidation} from "./../zod/zod"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();
import { Request, Response } from "express";
import { Post } from "../modals/postSchema";
import axios from "axios";
//get trends

export const getTrends = async(req:Request , res:Response)=>{
    try {
        const data = await Post.aggregate([
          {
            $group: {
              _id: '$category',
              totalLikes: { $sum: '$likeCount' },
            },
          },
          { $sort: { totalLikes: -1 } },
        ]);
        res.json(data);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }

}

export const getPrediction = async(req:Request , res : Response)=>{
  try {
    const categories = {
      "categories": ["Dresses", "Outerwear","Footwear", "Tops", "Bottomwear","Accessories" ]
    }
    // Call the Python API
    const response = await axios.post('http://localhost:5000/predict', {
      categories,
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error in prediction:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
}

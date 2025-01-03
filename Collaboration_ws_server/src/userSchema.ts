import mongoose, { Schema } from "mongoose";

export interface UserDocument{
    _id: string;
    username: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<UserDocument>({
    username: {
        type: String,
        required: true,
        unique : true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
})

export const User = mongoose.model('User', UserSchema);
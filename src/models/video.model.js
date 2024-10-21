import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from 'bcrypt'



const videoSchema = new Schema({
    videofile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,//cloudinary
    },

    refreshtoken: [{
        type: String,
    }],




}, { timestamps: true })


videoSchema.plugin(mongooseAggregatePaginate)


export const Video=mongoose.model("Video",videoSchema)
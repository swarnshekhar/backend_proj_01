import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
        index: true
    },
    avatar: {
        type: String,//cloudinary
        required: true,
    },
    coverimage: {
        type: String,//cloudinary
        required: true,
    },
    password: {
        type: String,
        required: [true, "password is jaruri"],
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Video',
    }],
    refreshtoken: [{
        type: String,
    }],




}, { timestamps: true })



userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next;
    this.password = bcrypt.hash(this.password, 10)
    next()




})


userSchema.methods.ispasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)


}

userSchema.methods.generateAccesstoken = async function () {
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
             },
             process.env.ACCESS_TOKEN_SECRET,
             {
                expiresIn:process.env.ACCESS_TOKEN_EXPIRY
             }
            )
}
userSchema.methods.generaterefreshtoken = async function () {
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
             },
             process.env.REFRESH_TOKEN_SECRET,
             {
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
             }
            )
}
export const User = mongoose.model("User", userSchema)

import express from 'express'
import connectDB from './db'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}))
app.use(express.json({limit:"15kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

export default app


//express is an web framework used to buing webapplications and api



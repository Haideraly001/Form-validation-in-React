import express from "express"
import fromRouter from "./routes/form-route.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const db_connect = process.env.DB_CONN


const app = express()
const port = process.env.PORT

app.use("/api/v1/form", fromRouter)

if (!db_connect) {
  console.log("err in db_connect");
}
mongoose.connect(db_connect)

app.listen(port)
import express from "express"
import fromRouter from "./routes/form-route.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors"

const app = express()

dotenv.config()
const db_connect = process.env.DB_CONN

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors())

const port = process.env.PORT

app.use(express.static(path.join(__dirname, "./app/app/build/index.html")))

app.use("/api/v1/form", fromRouter)

if (!db_connect) {
  console.log("err in db_connect");
}
mongoose.connect(db_connect)

app.listen(port)
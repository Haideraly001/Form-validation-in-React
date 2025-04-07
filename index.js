import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'
import cors from "cors"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, "./app/dist/index.html")))

app.use(express.json())


app.post("/api/v1/submit", (req, res,) => {
  console.log(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: req.body
    })
  }
  catch (err) {
    res.status(401).json({
      status: "fail",
      err: err.message
    })
  }
})


app.listen(8000)

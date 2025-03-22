import express from "express"

const app = express()
const port = 8000

app.use(express.json())

const data = {
  "name": "haider"
}

app.get("/api/v1/data", (req, res) => {
  res.status(200).json({
    status: "succss",
    data: data
  })
})

app.post("/api/v1/form", (req, res) => {
  console.log("post");

  try {
    const data = req.body
    console.log(data);
    res.status(201).json({
      status: "success",
      data: data
    })
  } catch (err) {
    res.status(401).json({
      status: "fail",
      err: err.message
    })
  }
})

app.listen(port)
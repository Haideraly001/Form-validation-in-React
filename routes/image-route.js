import express from "express"
import { upload } from "../utility/multer.js"

const route = express.Router()


route.post("/", upload.single("image"), (req, res) => {
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({
    success: true,
    message: "File uploaded successfully",
    fileUrl: fileUrl,
  });
  console.log(req.file);

})

export default route
import express from "express"
import { getAllSeries, addSeries, updateSeries, getOneSeries } from "../controller/series-controller.js"

const route = express.Router()

route.use(express.json())


route.get("/", getAllSeries)
route.get("/:id", getOneSeries)
route.post("/", addSeries)
route.patch("/:id", updateSeries)


export default route
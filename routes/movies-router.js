import express from "express"
import { getAllMovies, createMovie, findById, updateMovie, topFivehighestRating } from "../controller/movies-controller.js"

const route = express.Router()

route.use(express.json())


route.get("/", getAllMovies)
route.get("/top-five", topFivehighestRating, getAllMovies)
route.post("/", createMovie)
route.get("/:id", findById)
route.patch("/:id", updateMovie)

export default route
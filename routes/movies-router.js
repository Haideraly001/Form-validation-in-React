import express from "express"
import { getAllMovies, createMovie, findById, updateMovie, topFivehighestRating } from "../controller/movies-controller.js"

const route = express.Router()

route.use(express.json())


route.get("/", getAllMovies)
route.post("/", createMovie)
route.get("/:id", findById)
route.patch("/:id", updateMovie)
route.get("/top-five", topFivehighestRating, getAllMovies)


export default route
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(path.join(__dirname, "patg")))


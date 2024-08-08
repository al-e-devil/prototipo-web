import "dotenv/config"
import express from "express"
import cors from "cors"
import path from "path"

import { router } from "./routes"

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.set('json spaces', 4)
app.use(express.json())
app.use(router)
app.use(express.static(path.join(__dirname, './', 'public')));

app.listen(PORT, () => console.log("Servidor en linea"))

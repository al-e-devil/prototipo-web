import "dotenv/config"
import express from "express"
import cors from "cors"

import { router } from "./routes"

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.set('json spaces', 4)
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log("Servidor en linea"))

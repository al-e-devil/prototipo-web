import express, { Request, Response, Router } from 'express';
import { readdirSync } from "fs"
import path from "path"

const router = Router()
const files = readdirSync(__dirname)

for (const file of files) {
    if (file.endsWith(".js") && file !== "index.js") {
        const name = file.replace(".js", "")
        const module = require(path.join(__dirname, file))
        router.use(`/${name}`, module.router)
    }
}

router.get('/', (req: Request, res: Response) => {
    res.redirect('/home');
});

export { router }
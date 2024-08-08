import { Router } from 'express'
import { download } from '../controllers/pornhub.controller'

const router = Router()

router.get("/download", download)
// router.get("/search", search)

export { router }
import { Router } from 'express'
import { download } from '../controllers/pornhub.dl'

const router = Router()

router.get("/download", download)
// router.get("/search", search)

export { router }
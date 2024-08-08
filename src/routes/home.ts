import { Request, Response, Router } from 'express'

const router = Router()

router.get('/home', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export { router}
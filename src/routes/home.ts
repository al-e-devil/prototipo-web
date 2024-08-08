import { Request, Response } from 'express'

const router = Router()

app.get('/home', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

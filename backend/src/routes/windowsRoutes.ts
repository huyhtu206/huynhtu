import express, { Request, Response } from 'express';
import { WINDOWS_MENU } from '../data/windows';

const router = express.Router();

// GET /api/windows
router.get('/', (req: Request, res: Response) => {
    res.json(WINDOWS_MENU);
});

export default router;

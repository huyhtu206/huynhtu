import express, { Request, Response } from 'express';
import { SOFTWARE_DATABASE, GHOST_OS_DATABASE, SERVICES_LIST, NEWS_LIST } from '../data/software';

const router = express.Router();

// GET /api/software
router.get('/', (req: Request, res: Response) => {
    res.json(SOFTWARE_DATABASE);
});

// GET /api/software/ghost
router.get('/ghost', (req: Request, res: Response) => {
    res.json(GHOST_OS_DATABASE);
});

// GET /api/software/services
router.get('/services', (req: Request, res: Response) => {
    res.json(SERVICES_LIST);
});

// GET /api/software/news
router.get('/news', (req: Request, res: Response) => {
    res.json(NEWS_LIST);
});

export default router;

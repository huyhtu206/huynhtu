import express, { Request, Response } from 'express';
import { OFFICE_VERSIONS, OFFICE_MSI_VERSIONS, OFFICE_MAC_VERSIONS, OFFICE_LANGUAGES } from '../data/office';

const router = express.Router();

// GET /api/office/c2r
router.get('/c2r', (req: Request, res: Response) => {
    res.json(OFFICE_VERSIONS);
});

// GET /api/office/msi
router.get('/msi', (req: Request, res: Response) => {
    res.json(OFFICE_MSI_VERSIONS);
});

// GET /api/office/mac
router.get('/mac', (req: Request, res: Response) => {
    res.json(OFFICE_MAC_VERSIONS);
});

// GET /api/office/languages
router.get('/languages', (req: Request, res: Response) => {
    res.json(OFFICE_LANGUAGES);
});

export default router;

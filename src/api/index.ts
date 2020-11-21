import { Router, Request, Response } from 'express';
const router = Router();

import info from './info';

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'API - Welcome'
    });
});

router.use('/info', info);

export default router;
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        mesagge: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam dicta quisquam culpa ullam a veritatis? Exercitationem id voluptate dolorum harum, dolorem ducimus tenetur voluptatibus. Voluptatem officia cum modi! Ipsa!'
    });
});

export default router;
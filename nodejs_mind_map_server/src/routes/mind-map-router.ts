import {NextFunction, Request, Response, Router} from "express";

const router = Router()
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    try {
        console.log("get")
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});
export default router;
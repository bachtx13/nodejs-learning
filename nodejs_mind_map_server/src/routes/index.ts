import {Router} from "express";
import mindMapRouter from "./mind-map-router";

const router = Router()
router.use('/mind-map', mindMapRouter)

export default router;
import express from 'express';

const router = express.Router();

import { router as routerFromSharath } from "./Sharath/routes.js";
import { router as routerFromKeshav } from "./Keshav/routes.js";

router.use("/Sharath", routerFromSharath);
router.use("/Keshav", routerFromKeshav);

export { router };
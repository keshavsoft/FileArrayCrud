import express from 'express';

const router = express.Router();

import { router as routerFromSree } from "./Sree/routes.js";
import { router as routerFromKeshav } from "./Keshav/routes.js";

router.use("/Sree", routerFromSree);
router.use("/Keshav", routerFromKeshav);

export { router };
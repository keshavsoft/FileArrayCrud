import express from 'express';

const router = express.Router();

import { router as routerFromKeshav } from "./Keshav/routes.js";

router.use("/Keshav", routerFromKeshav);

export { router };
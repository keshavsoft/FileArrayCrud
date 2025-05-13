import express from 'express';

const router = express.Router();

import { router as routerFromV3 } from "./V3/routes.js";

router.use("/V3", routerFromV3);

export { router };
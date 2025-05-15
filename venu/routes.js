import express from 'express';

const router = express.Router();

import { router as routerFromv1 } from "./v1/routes.js";

router.use("/v1", routerFromv1);

export { router };
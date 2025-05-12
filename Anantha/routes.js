import express from 'express';

const router = express.Router();

import { router as routerFromV2 } from "./V2/routes.js";

router.use("/V2", routerFromV2);

export { router };
import express from 'express';

const router = express.Router();

import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";

router.use("/V2", routerFromV2);
router.use("/V1", routerFromV1);

export { router };
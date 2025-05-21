import express from 'express';

const router = express.Router();

import { router as routerFromVarshita } from "./Varshita/routes.js";
import { router as routerFromKishan } from "./Kishan/routes.js";

router.use("/Varshita", routerFromVarshita);
router.use("/Kishan", routerFromKishan);

export { router };
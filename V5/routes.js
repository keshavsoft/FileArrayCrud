import express from 'express';

const router = express.Router();

import { router as routerFromSharath } from "./Sharath/routes.js";
import { router as routerFromSree } from "./Sree/routes.js";
import { router as routerFromKeshav } from "./Keshav/routes.js";
import { router as routerFromSrivalli } from "./Srivalli/routes.js";
import { router as routerFromNeed_WithTable_Ext } from "./Need_WithTable_Ext/routes.js";

router.use("/Sharath", routerFromSharath);
router.use("/Sree", routerFromSree);
router.use("/Keshav", routerFromKeshav);

router.use("/Srivalli", routerFromSrivalli);

router.use("/Need_WithTable_Ext", routerFromNeed_WithTable_Ext);

export { router };
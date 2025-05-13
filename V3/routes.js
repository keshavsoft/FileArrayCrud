import express from 'express';

const router = express.Router();

import { router as routerFromVarshitha } from "./Varshitha/routes.js";
import { router as routerFromSunil } from "./Sunil/routes.js";
import { router as routerFromSrivalli } from "./Srivalli/routes.js";
import { router as routerFromSharath } from "./Sharath/routes.js";
import { router as routerFromEswar } from "./Eswar/routes.js";
import { router as routerFromAnantha } from "./Anantha/routes.js";
import { router as routerFromAmeena } from "./Ameena/routes.js";
import {router as routerFromKishan} from "./Kishan/routes.js";

router.use('/Kishan',routerFromKishan);
router.use("/Varshitha", routerFromVarshitha);
router.use("/Sunil", routerFromSunil);
router.use("/Srivalli", routerFromSrivalli);
router.use("/Sharath", routerFromSharath);
router.use("/Eswar", routerFromEswar);
router.use("/Anantha", routerFromAnantha);
router.use("/Ameena", routerFromAmeena);

export { router };
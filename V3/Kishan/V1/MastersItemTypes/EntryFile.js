import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";

router.use("/Read", routerFromRead);
router.use("/InsertWithPk", routerFromInsertWithPk);

export { router };
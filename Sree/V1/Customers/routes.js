import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromShowAll } from "./ShowAll/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/ShowAll", routerFromShowAll);

export { router };
import express from 'express';

const router = express.Router();

import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";

router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/InsertWithPk", routerFromInsertWithPk);

export { router };
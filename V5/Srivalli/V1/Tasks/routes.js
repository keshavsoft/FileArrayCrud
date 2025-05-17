import express from 'express';

const router = express.Router();

import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromShowAll } from "./ShowAll/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";

router.use("/Delete", routerFromDelete);
router.use("/ShowAll", routerFromShowAll);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/InsertWithPk", routerFromInsertWithPk);

export { router };
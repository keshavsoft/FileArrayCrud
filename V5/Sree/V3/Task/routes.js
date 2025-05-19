import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPkAndUuId } from "./InsertWithPkAndUuId/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromShowAll } from "./ShowAll/routes.js";
import { router as routerFromInsertWithTable } from "./InsertWithTable/routes.js";

router.use("/InsertWithPkAndUuId", routerFromInsertWithPkAndUuId);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/Alter", routerFromAlter);
router.use("/Delete", routerFromDelete);
router.use("/ShowAll", routerFromShowAll);
router.use("/InsertWithTable", routerFromInsertWithTable);

export { router };
import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPkAndUuIdAndDateTime } from "./InsertWithPkAndUuIdAndDateTime/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromShowAll } from "./ShowAll/routes.js";

router.use("/InsertWithPkAndUuIdAndDateTime", routerFromInsertWithPkAndUuIdAndDateTime);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/Delete", routerFromDelete);
router.use("/Alter", routerFromAlter);
router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/ShowAll", routerFromShowAll);

export { router };
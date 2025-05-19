import express from 'express';

const router = express.Router();

import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromInsertWithPkAndUuIdAndDateTime } from "./InsertWithPkAndUuIdAndDateTime/routes.js";


router.use("/Delete", routerFromDelete);
router.use("/Alter", routerFromAlter);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/InsertWithPkAndUuIdAndDateTime", routerFromInsertWithPkAndUuIdAndDateTime);

export { router };
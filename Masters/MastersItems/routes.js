import express from 'express';

const router = express.Router();

import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromShowAll } from "./ShowAll/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromInsertWithPkAndUuidAndDateTime } from "./InsertWithPkAndUuidAndDateTime/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";

router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/ShowAll", routerFromShowAll);
router.use("/Alter", routerFromAlter);
router.use("/InsertWithPkAndUuidAndDateTime", routerFromInsertWithPkAndUuidAndDateTime);
router.use("/Delete", routerFromDelete);

export { router };
import express from 'express';

const router = express.Router();
import { router as routerFromInsertWithPkAndUuIdAndDateTime } from "./InsertWithPkAndUuIdAndDateTime/routes.js";
import { router as routerFromAlterWithPk } from "./AlterWithPk/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromRead } from "./Read/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromInsert } from "./Insert/routes.js";

router.use("/InsertWithPkAndUuIdAndDateTime", routerFromInsertWithPkAndUuIdAndDateTime);
router.use("/AlterWithPk", routerFromAlterWithPk);
router.use("/Alter", routerFromAlter);
router.use("/Delete", routerFromDelete);
router.use("/Read", routerFromRead);
router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/Insert", routerFromInsert);

export { router };
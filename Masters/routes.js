import express from 'express';

const router = express.Router();

import { router as routerFromMastersAddOns } from "./MastersAddOns/routes.js";
import { router as routerFromMastersCustomers } from "./MastersCustomers/routes.js";
import { router as routerFromMastersItemCategory } from "./MastersItemCategory/routes.js";
import { router as routerFromMastersItems } from "./MastersItems/routes.js";
import { router as routerFromMastersItemService } from "./MastersItemService/routes.js";
import { router as routerFromMastersItemTypes } from "./MastersItemTypes/routes.js";
import { router as routerFromQrCodes } from "./QrCodes/routes.js";

router.use("/MastersAddOns", routerFromMastersAddOns);
router.use("/MastersCustomers", routerFromMastersCustomers);
router.use("/MastersItemCategory", routerFromMastersItemCategory);
router.use("/MastersItems", routerFromMastersItems);
router.use("/MastersItemService", routerFromMastersItemService);
router.use("/MastersItemTypes", routerFromMastersItemTypes);
router.use("/QrCodes", routerFromQrCodes);

export { router };
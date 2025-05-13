import express from 'express';

const router = express.Router();

import { router as routerFromMastersItemService } from "./MastersItemService/routes.js";

router.use("/MastersItemService", routerFromMastersItemService);

export { router };
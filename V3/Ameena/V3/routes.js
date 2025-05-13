import express from 'express';

const router = express.Router();

import { router as routerFromMastersItems } from "./MastersItems/routes.js";

router.use("/MastersItems", routerFromMastersItems);

export { router };
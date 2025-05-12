import express from 'express';

const router = express.Router();

import { router as routerFromMastersItemTypes } from "./MastersItemTypes/routes.js";

router.use("/MastersItemTypes", routerFromMastersItemTypes);

export { router };
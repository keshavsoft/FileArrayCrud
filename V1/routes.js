import express from 'express';

const router = express.Router();

import { router as routerFromFileAsArray } from "./FileAsArray/routes.js";

router.use('/FileAsArray', routerFromFileAsArray);

export { router };
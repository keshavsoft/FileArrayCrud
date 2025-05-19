import express from 'express';

const router = express.Router();

import { router as routerFromAlter } from "./Alter/routes.js";

router.use("/Alter", routerFromAlter);

export { router };
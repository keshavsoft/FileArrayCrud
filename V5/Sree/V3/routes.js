import express from 'express';

const router = express.Router();

import { router as routerFromTask } from "./Task/routes.js";

router.use("/Task", routerFromTask);

export { router };
import express from 'express';

const router = express.Router();

import { router as routerFromtask } from "./task/routes.js";

router.use("/task", routerFromtask);

export { router };
import express from 'express';

const router = express.Router();

import { router as routerFromTasks } from "./Tasks/routes.js";

router.use("/Tasks", routerFromTasks);

export { router };
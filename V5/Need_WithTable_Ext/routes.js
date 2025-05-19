import express from 'express';

const router = express.Router();

import { router as routerFromWithTable } from "./WithTable/routes.js";

router.use("/WithTable", routerFromWithTable);

export { router };
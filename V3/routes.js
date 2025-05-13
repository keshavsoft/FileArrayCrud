import express from 'express';

const router = express.Router();

import {router as routerFromKishan} from "./Kishan/routes.js";

router.use('/Kishan',routerFromKishan);
export { router };
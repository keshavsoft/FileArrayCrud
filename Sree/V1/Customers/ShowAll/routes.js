import express from 'express';

var router = express.Router();

import { router as routerGetFuncs } from './Routes/entryFile.js';

router.use('/', routerGetFuncs);

export { router };
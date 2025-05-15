import express from 'express';

var router = express.Router();

import { router as routerFrompostFuncs } from './Routes/entryFile.js';

router.use('/', routerFrompostFuncs);

export { router };
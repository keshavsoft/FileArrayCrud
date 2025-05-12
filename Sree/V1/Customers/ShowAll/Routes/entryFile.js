import express from 'express';
var router = express.Router();

import {
    GetFuncs
} from '../Controllers/entryFile.js';


router.get('/', GetFuncs);

export { router };
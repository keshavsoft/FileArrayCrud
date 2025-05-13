import express from 'express';
var router = express.Router();
import bodyparser from "body-parser";

import { PostFunc } from '../Controllers/entryFile.js';
router.use(bodyparser.json());

router.post('/', PostFunc);

export { router };
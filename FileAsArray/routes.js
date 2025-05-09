import express from 'express';

const router = express.Router();

import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromWithContent } from "./WithContent/routes.js";
import { router as routerFromCreate } from "./Create/routes.js";

router.use("/Delete", routerFromDelete);
router.use("/WithContent", routerFromWithContent);
router.use("/Create", routerFromCreate);

export { router };
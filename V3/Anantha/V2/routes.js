import express from 'express';

const router = express.Router();

import { router as routerFromMastersCustomers } from "./MastersCustomers/routes.js";

router.use("/MastersCustomers", routerFromMastersCustomers);

export { router };
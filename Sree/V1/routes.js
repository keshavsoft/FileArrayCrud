import express from 'express';

const router = express.Router();

import { router as routerFromCustomers } from "./Customers/routes.js";

router.use("/Customers", routerFromCustomers);

export { router };
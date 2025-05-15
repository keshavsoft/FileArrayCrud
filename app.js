import express from 'express';
const app = express()
const port = 3000;

import { router as routerFromFileAsArray } from "./FileAsArray/routes.js";
import { router as routerFromContentInArray } from "./ContentInArray/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromLogin } from "./Login/routes.js";
import { router as routerFromMiddleWares } from "./MiddleWares/entryFile.js";
import { router as routerFromV4 } from "./V4/routes.js";

app.use(express.static('Public'));

app.use('/FileAsArray', routerFromMiddleWares, routerFromFileAsArray);
app.use('/ContentInArray', routerFromContentInArray);
app.use('/V1', routerFromV1);
app.use('/V3', routerFromV3);
app.use('/Login', routerFromLogin);
app.use("/V4", routerFromV4);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
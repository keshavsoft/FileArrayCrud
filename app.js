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
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromMasters } from "./Masters/routes.js";
import { router as routerFromItemsWithGroup } from "./ItemsWithGroup/routes.js";

app.use(express.static('Public'));

app.use('/FileAsArray', routerFromMiddleWares, routerFromFileAsArray);
app.use('/ContentInArray', routerFromContentInArray);
app.use('/V1', routerFromV1);
app.use('/V3', routerFromV3);
app.use('/Login', routerFromLogin);
app.use("/V4", routerFromV4);
app.use("/V5", routerFromV5);
app.use("/V6", routerFromV6);
app.use("/Masters", routerFromMasters);
app.use("/ItemsWithGroup", routerFromItemsWithGroup);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

});
import express from 'express';
const app = express()
const port = 3000;

import { router as routerFromSharath } from "./Sharath/routes.js";
import { router as routerFromFileAsArray } from "./FileAsArray/routes.js";
import { router as routerFromContentInArray } from "./ContentInArray/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";

app.use(express.static('public'));

app.use('/FileAsArray', routerFromFileAsArray);
app.use('/ContentInArray', routerFromContentInArray);
app.use('/V1', routerFromV1);
app.use("/Sharath", routerFromSharath);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
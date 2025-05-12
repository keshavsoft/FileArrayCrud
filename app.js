import express from 'express';
const app = express()
const port = 3000;

import { router as routerFromVarshitha } from "./Varshitha/routes.js";
import { router as routerFromSharath } from "./Sharath/routes.js";
import { router as routerFromFileAsArray } from "./FileAsArray/routes.js";
import { router as routerFromContentInArray } from "./ContentInArray/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromAmeena } from "./Ameena/routes.js";
import { router as routerFromAnantha } from "./Anantha/routes.js";
import { router as routerFromEswar } from "./Eswar/routes.js";
import { router as routerFromKishan } from "./Kishan/routes.js";
import { router as routerFromSrivalli } from "./Srivalli/routes.js";
import { router as routerFromSunil } from "./Sunil/routes.js";

app.use(express.static('public'));

app.use('/FileAsArray', routerFromFileAsArray);
app.use('/ContentInArray', routerFromContentInArray);
app.use('/V1', routerFromV1);
app.use("/Varshitha", routerFromVarshitha);
app.use("/Sharath", routerFromSharath);
app.use("/Ameena", routerFromAmeena);
app.use("/Anantha", routerFromAnantha);
app.use("/Eswar", routerFromEswar);
app.use("/Kishan", routerFromKishan);
app.use("/Srivalli", routerFromSrivalli);
app.use("/Sunil", routerFromSunil);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
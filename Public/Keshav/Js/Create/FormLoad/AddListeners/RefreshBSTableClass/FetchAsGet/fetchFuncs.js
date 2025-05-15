import getUrlJson from './getUrl.json' with {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.PostEndPoint;
    let jVarFetchHeaders = StartFuncFetchHeaders();
    let jVarFetchUrl = `${jVarLocalFetchUrl}`;

    let response = await fetch(jVarFetchUrl, jVarFetchHeaders);

    return await response;
};

export { StartFunc };


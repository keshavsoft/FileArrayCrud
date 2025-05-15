import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let LocalroutePath = getUrlJson.GetEndPoint;
    let jVarFileName = jFLocalFileName();
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarFileName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let jFLocalFileName = () => {
    let jVarLocalFileName = 'FileName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFileName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc };


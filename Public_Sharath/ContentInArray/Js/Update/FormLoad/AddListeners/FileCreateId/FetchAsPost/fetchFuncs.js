import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let LocalroutePath = getUrlJson.GetEndPoint;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarFileName = jFLocalFileName();

    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarFileName}/${jVarLocalFilterString}`;

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

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };


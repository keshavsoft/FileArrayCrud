import UrlJson from './getUrl.json' with {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
let StartFunc = async () => {
    let jVarLocalFetchUrl = UrlJson.PutEndPoint;
    let jVarFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarFetchUrl = `${jVarLocalFetchUrl}/${jVarLocalFilterString}`;

    let response = await fetch(jVarFetchUrl, jVarFetchHeaders);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };


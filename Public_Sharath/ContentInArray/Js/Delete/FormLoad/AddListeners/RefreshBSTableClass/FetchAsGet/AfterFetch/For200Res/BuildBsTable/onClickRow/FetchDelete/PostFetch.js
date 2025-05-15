import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "../../../../Config.json" with { type: "json" };

let StartFunc = async ({ inRowPk }) => {
    let LocalroutePath = UrlJson.DeleteUrl;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarFileName = jFLocalFileName();
    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarFileName}/${inRowPk}`;
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


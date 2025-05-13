import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;
    let jVarFileName = jFLocalFileName();
    let response = await fetch(`${jVarLocalFetchUrl}/${jVarFileName}`);

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


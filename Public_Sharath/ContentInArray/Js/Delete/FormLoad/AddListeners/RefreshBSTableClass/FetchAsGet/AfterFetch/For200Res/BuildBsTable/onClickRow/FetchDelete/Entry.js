import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inRowPk }) => {
    console.log("aaaaaaaaaaaaaa");

    let jVarLocalFetchResponse = await StartFuncFetchFuncs({ inRowPk });

    if (jVarLocalFetchResponse.status === 200) {
        StartFuncAfterFetch({ inResponseAsJson: jVarLocalFetchResponse });
    };
};

export { StartFunc }
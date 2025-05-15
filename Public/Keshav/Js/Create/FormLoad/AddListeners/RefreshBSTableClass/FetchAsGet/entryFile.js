import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './AfterFetch/entryFile.js';
import { StartFunc as CheckFuncs } from './CheckFuncs/entryFile.js';

const StartFunc = async() => {
    let jVarLocalCheckFuncs = await CheckFuncs();
    let localResponse = await StartFuncFetchFuncs(jVarLocalCheckFuncs);

    afterFetch({ inResponse: localResponse });
};

export { StartFunc };
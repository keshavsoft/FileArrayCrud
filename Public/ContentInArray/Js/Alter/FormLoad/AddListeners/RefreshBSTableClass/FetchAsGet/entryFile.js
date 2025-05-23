import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './AfterFetch/entryFile.js';

const StartFunc = async() => {
    let localResponse = await StartFuncFetchFuncs();

    afterFetch({ inResponse: localResponse });
};

export { StartFunc };
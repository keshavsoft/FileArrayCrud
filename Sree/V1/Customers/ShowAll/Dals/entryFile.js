import { StartFunc as StartFuncFromReadFile } from '../KFs/ReadFile.js';

let GetFuncs = () => {
    let LocalFromLowDb = StartFuncFromReadFile();

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    GetFuncs
};
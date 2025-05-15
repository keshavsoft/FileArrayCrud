import { StartFunc as StartFuncFromJWT } from '../JWT/EntryFile.js';

let postDefaultFunc = ({LocalCoumnSecret}) => {
    let LocalFromLowDb = StartFuncFromJWT({LocalCoumnSecret});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};
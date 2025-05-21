import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let getDefaultFunc = ({FromDate,ToDate}) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({FromDate,ToDate});

    return LocalFromLowDb;
};

export {
    getDefaultFunc
};
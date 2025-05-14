import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inBody, inFileName, inPk }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inBody, inFileName, inPk });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};
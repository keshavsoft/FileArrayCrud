import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inBody, inFileName, inPk }) => {
    return postDefaultFuncFromDal({ inBody, inFileName, inPk });
};

export {
    postDefaultFunc
};
import {
    getDefaultFunc as getDefaultFuncFromDal
} from '../Dals/entryFile.js';

let getDefaultFunc = ({FromDate,ToDate}) => {
    return getDefaultFuncFromDal({FromDate,ToDate});
};

export {
    getDefaultFunc
};
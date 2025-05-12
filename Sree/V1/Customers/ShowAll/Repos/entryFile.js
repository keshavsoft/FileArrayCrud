import {
    GetFuncs as GetFuncsFromDal
} from '../Dals/entryFile.js';

let GetFuncs = () => {
    return GetFuncsFromDal();
};

export {
    GetFuncs
};
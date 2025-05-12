import {
    GetFuncs as GetFuncsFromRepo
} from '../Repos/entryFile.js';

let GetFuncs = (req, res) => {

    let LocalFromRepo = GetFuncsFromRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFuncs
};
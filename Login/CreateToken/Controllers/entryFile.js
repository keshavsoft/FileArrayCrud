import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
    let LocalCoumnSecret = LocalRequestBody.Secret;

    let LocalFromRepo = postDefaultFuncFromRepo({ LocalCoumnSecret });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };
    res.cookie('KSToken', LocalFromRepo.SuccessText, { maxAge: 900000, httpOnly: false });
    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};
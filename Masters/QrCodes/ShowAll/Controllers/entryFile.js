import {
    getDefaultFunc as getDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let getDefaultFunc = (req, res) => {
    let LocalFromDate = req.params.FromDate;
    let LocalToDate = req.params.ToDate;

    let LocalFromRepo = getDefaultFuncFromRepo({
        FromDate:LocalFromDate,
        ToDate:LocalToDate

    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo?.JsonData);
};

export {
    getDefaultFunc
};
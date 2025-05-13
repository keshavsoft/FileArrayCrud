import { StartFunc as StartFuncValidateToken } from "../JWT/verify.js";

let StartFunc = (req, res, next) => {

    let localClientToken = req.cookies.KSToken;

    let localResult = StartFuncValidateToken({ inToken: localClientToken });

    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    next();
};

export { StartFunc };
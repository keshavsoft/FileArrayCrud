import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
// import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    // StartFuncFromUrlParams();
    StartFuncAddListeners();
};

export { StartFunc };
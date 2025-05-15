import { StartFunc as StartFuncNav } from "./Nav/EntryFile.js";
const StartFunc = (row, $element, field) => {

    if (field === "Delete") {
        StartFuncNav({ inRowpk: row.pk });
    };
};

export { StartFunc };
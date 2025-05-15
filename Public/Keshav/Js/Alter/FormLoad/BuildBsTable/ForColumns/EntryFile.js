import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnAlter } from "./Alter/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalColumnAlter = LocalColumns.find(element => element.field === "Alter");

    if (LocalColumnAlter === undefined === false) {
        ColumnAlter({ inFindColumn: LocalColumnAlter });
    };

}

export { StartFunc };


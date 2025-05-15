import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnDelete } from "./Delete/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");


    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
   
      let LocalColumnDelete = LocalColumns.find(element => element.field === "Delete");


    if (LocalColumnDelete === undefined === false) {
        ColumnDelete({ inFindColumn: LocalColumnDelete });
    };
   
}

export { StartFunc };


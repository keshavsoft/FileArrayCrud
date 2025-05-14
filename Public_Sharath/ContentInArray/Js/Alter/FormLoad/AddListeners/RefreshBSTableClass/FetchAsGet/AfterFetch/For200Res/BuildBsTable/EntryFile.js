import optionsJson from './options.json' with { type: 'json' };
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

const $table = $('#table');

const StartFunc = ({ inResponseAsJson }) => {
    optionsJson.data = inResponseAsJson;
    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    ForColumns({ inColumns: optionsJson.columns });
    jFLocalPrepareColumns({ inFirstRow: inResponseAsJson[0] });

    $table.bootstrapTable(optionsJson);
};
const jFLocalPrepareColumns = ({ inFirstRow }) => {
    const excludedKeys = ["UuId", "DateTime"];
    const keyMappings = { pk: "Dc" };

    Object.keys(inFirstRow).forEach((inKey) => {
        if (!excludedKeys.includes(inKey)) {
            optionsJson.columns.push({
                field: inKey,
                title: keyMappings[inKey] || inKey
            });
        }
    });
    optionsJson.columns.push({
        field: "Alter",
        title: "Alter",
        align: "center",
        formatter: function (value, row, index) {
            return `
            <i class="bi bi-pencil-square text-primary me-2" style="cursor:pointer;" title="Edit"></i>`;
        }
    });

};

export { StartFunc };
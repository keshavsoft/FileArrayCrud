import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const $table = $('#table');

const StartFunc = ({ inResponseAsJson }) => {
    optionsJson.data = inResponseAsJson;

    ForColumns({ inColumns: optionsJson.columns });
    jFLocalPrepareColumns({ inFirstRow: inResponseAsJson[0] });

    $table.bootstrapTable(optionsJson);
};

const jFLocalPrepareColumns = ({ inFirstRow }) => {
    const excludedKeys = ["UuId","DateTime"];
    const keyMappings = { pk: "Dc" }; 

    Object.keys(inFirstRow).forEach((inKey) => {
        if (!excludedKeys.includes(inKey)) {
            optionsJson.columns.push({ 
                field: inKey, 
                title: keyMappings[inKey] || inKey 
            });
        }
    });
};



export { StartFunc };


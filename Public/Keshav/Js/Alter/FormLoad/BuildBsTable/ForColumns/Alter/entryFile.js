let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="btn btn-danger" title="Delete">`,
        `<i class="bi  bi-pencil-square"></i>`,
        `</a>`
    ].join('');
};

export { StartFunc };

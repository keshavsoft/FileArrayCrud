let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalHtmlId = 'FileCreateId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRefreshBSTableId) {
        jVarLocalRefreshBSTableId.click();
    } else {
        console.warn(`Element with id '${jVarLocalHtmlId}' not found.`);
    }

    Swal.fire({
        text: inResponseAsJson.message || JSON.stringify(inResponseAsJson),
        icon: "error",
        title: "check"
    });
};

export { StartFunc };
